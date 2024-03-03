import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewUser } from "../../redux/userSlice";
import logo from "../../assets/type-wonder-orange-logo.svg";
import { setScreen } from "../../redux/authSlice";

const StepOneOnboard = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
    console.log(userInput);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setNewUser(userInput));
    dispatch(setScreen(2));
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="flex-row">
          <h3>Let's create your profile!</h3>
        </div>

        <form onInput={onInput} onSubmit={onSubmit} className="form flex-col">
          <div className="flex-col form-input">
            <label htmlFor="birthdate">When is your birthday?</label>
            <input type="date" name="birthdate" id="birthdate" required />
          </div>
          <div className="flex-col form-input">
            <label htmlFor="yearsWithTypeOne">
              How many years have you had T1D?
            </label>
            <input type="text" name="yearsWithTypeOne" id="yearsWithTypeOne" />
          </div>
          <div className="flex-col form-input">
            <label htmlFor="name">Where are you based?</label>
            <input type="name" name="name" id="name" required />
          </div>
          <button className="btn">Next</button>
        </form>
      </div>
      <div className="auth-button-container">
        <h3
          onClick={() => {
            dispatch(setScreen(0));
          }}
        >
          Back
        </h3>
      </div>
    </div>
  );
};

export default StepOneOnboard;
