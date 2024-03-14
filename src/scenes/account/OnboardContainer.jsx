import { useDispatch } from "react-redux";
import SignUp from "./SignUp";
import StepOneOnboard from "./StepOneOnboard";
import StepTwoOnboard from "./StepTwoOnboard";
import Photos from "./Photos";
import { useState } from "react";
import sha256 from "sha256";
import { getLocation } from "../../utils/getLocation";
import { setNewUser } from "../../redux/userSlice";

const OnboardContainer = () => {
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState({ profileImages: [] });
  const dispatch = useDispatch();

  //FORM STEPS

  const handleStep = (step) => {
    setStep(step);
  };

  //GENERATING USER INPUT

  //photos
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

  //diagnosis year
  const calculateDiagnosisYear = (yearsSinceDiagnosis) => {
    const currentYear = new Date().getFullYear();
    const yearOfDiagnosis = currentYear - yearsSinceDiagnosis;
    setUserInput({ ...userInput, yearOfDiganosis: yearOfDiagnosis });
  };

  //hashed password
  const hashPassword = (password) => {
    const hashedPassword = sha256(password + "cohort16");
    setUserInput({ ...userInput, password: hashedPassword });
  };

  //FORM INPUT CALLED ON EVERY FORM - for simple input fields
  const onInput = (e) => {
    const pastimes = [];

    if (e.target.id === "pastimes") {
      e.target.value.forEach((pastime) => {
        pastimes.push(pastime.value);
      });
      e.target.value = pastimes;
    }

    setUserInput({
      ...userInput,
      [e.target.id]: e.target.value,
    });
  };

  //FORM SUBMIT CALLED ON EVERY FORM
  const onSubmit = (e) => {
    e.preventDefault();

    // note to self -use Joi to check I have all data then call set userInput.
    setUserInput({
      ...userInput,
      [e.target.id]: e.target.value,
    });
    dispatch(setNewUser(userInput));
  };

  console.log(userInput);

  return (
    <div>
      {step === 0 && (
        <SignUp
          step={step}
          handleStep={handleStep}
          userInput={userInput}
          onInput={onInput}
          onSubmit={onSubmit}
          hashPassword={hashPassword}
        />
      )}
      {step === 1 && (
        <StepOneOnboard
          calculateDiagnosisYear={calculateDiagnosisYear}
          handleStep={handleStep}
          userInput={userInput}
          onInput={onInput}
          onSubmit={onSubmit}
          setUserInput={setUserInput}
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
