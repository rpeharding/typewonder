import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewUser } from "../../redux/userSlice";

import { setScreen } from "../../redux/authSlice";

const StepTwoOnboard = () => {
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
    <>
      <div className="signup-container">
        <div className="signup-form">
          <div className="flex-row">
            <h3>Let's create your profile!</h3>
          </div>

          <form onInput={onInput} onSubmit={onSubmit} className="form flex-col">
            <div className="flex-col form-input">
              <label for="bio">Add a short bio</label>

              <textarea id="bio" name="bio" rows="5" cols="33">
                let others know a bit about you...
              </textarea>
            </div>
            <div className="flex-col form-input">
              <label htmlFor="yearsWithTypeOne">
                Select up to 6 of your favourite adventure pastimes
              </label>
              <select name="Country" multiple size="5">
                <option value="USA">USA</option>
                <option value="Russia">Russia</option>
                <option value="India">India</option>
                <option value="Britain">Britain</option>
              </select>
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
    </>
  );
};

export default StepTwoOnboard;
