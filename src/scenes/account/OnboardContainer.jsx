import { useDispatch } from "react-redux";
import SignUp from "./SignUp";
import StepOneOnboard from "./StepOneOnboard";
import StepTwoOnboard from "./StepTwoOnboard";
import Photos from "./Photos";
import { useState } from "react";

const OnboardContainer = () => {
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState({});

  const dispatch = useDispatch();

  const handleStep = (step) => {
    setStep(step);
  };

  const onInput = (e) => {
    setUserInput({
      ...userInput,
      [e.target.id]: e.target.value,
    });
  };

  console.log(userInput);

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
