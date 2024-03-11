import { useDispatch } from "react-redux";
import SignUp from "./SignUp";
import StepOneOnboard from "./StepOneOnboard";
import StepTwoOnboard from "./StepTwoOnboard";
import Photos from "./Photos";
import { useState } from "react";

const OnboardContainer = () => {
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState({ profileImages: [] });
  const [selectedMultiImages, setSelectedMultiImages] = useState([]);

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
    const filesArr = Array.from(e.target.files);
    let base64Images = [];

    filesArr.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.addEventListener("load", (e) => {
        base64Images.push(e.target.result);
        console.log(base64Images);
        if (filesArr.length === base64Images.length) {
          setUserInput({
            ...userInput,
            profileImages: base64Images,
          });
        }
      });
    });
  };

  const resetImageChoice = () => {
    setUserInput({
      ...userInput,
      profileImages: [],
    });
  };

  //FORM INPUT CALLED ON EVERY FORM
  const onInput = (e) => {
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
    if (e.target.id === "profileImages") {
      return;
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

    // note to self -use Joi to check I have all data then call set userInput.
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
          setUserInput={setUserInput}
        />
      )}
    </div>
  );
};

export default OnboardContainer;
