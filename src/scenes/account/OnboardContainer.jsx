import { useDispatch } from "react-redux";
import SignUp from "./SignUp";
import StepOneOnboard from "./StepOneOnboard";
import StepTwoOnboard from "./StepTwoOnboard";
import Photos from "./Photos";
import { useState } from "react";
import { setMessage } from "../../redux/authSlice";

const OnboardContainer = () => {
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState({});
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [selectedMultiImages, setSelectedMultiImages] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  const dispatch = useDispatch();

  //FORM STEPS

  const handleStep = (step) => {
    setStep(step);
  };

  //PHOTOS

  const profilePhotoSelector = (e) => {
    console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", (e) => {
      setUserInput({ ...userInput, mainImage: e.target.result });
    });
  };

  const multiplePhotosSelector = (e) => {
    console.log(e.target.files);
    // encode to base 64 and add to array called profileImages to match db
    setSelectedMultiImages(e.target.files);
  };

  //FORM INPUT CALLED ON EVERY FORM
  const onInput = (e) => {
    console.log(e.target.id);
    const pastimes = [];
    let mainImage;
    if (e.target.id === "pastimes") {
      e.target.value.forEach((pastime) => {
        pastimes.push(pastime.value);
      });
      e.target.value = pastimes;
    }
    if (e.target.id === "mainImage") {
      mainImage = e.target.value;
    }
    setUserInput({
      ...userInput,
      [e.target.id]: e.target.value,
    });
  };

  console.log(userInput);

  //FORM SUBMIT CALLED ON EVERY FORM
  const onSubmit = (e) => {
    e.preventDefault();

    // use Joi to check I have all data then call set userInput.
    setUserInput({
      ...userInput,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      {step === 0 && (
        <SignUp
          step={step}
          handleStep={handleStep}
          userInput={userInput}
          onInput={onInput}
          onSubmit={onSubmit}
        />
      )}
      {step === 1 && (
        <StepOneOnboard
          handleStep={handleStep}
          userInput={userInput}
          onInput={onInput}
          onSubmit={onSubmit}
        />
      )}
      {step === 2 && (
        <StepTwoOnboard
          handleStep={handleStep}
          userInput={userInput}
          onInput={onInput}
          onSubmit={onSubmit}
        />
      )}
      {step === 3 && (
        <Photos
          profilePhotoSelector={profilePhotoSelector}
          multiplePhotosSelector={multiplePhotosSelector}
          handleStep={handleStep}
          userInput={userInput}
          onInput={onInput}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default OnboardContainer;
