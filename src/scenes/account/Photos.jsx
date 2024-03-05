import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewUser } from "../../redux/userSlice";
import Select from "react-select";
import { setScreen } from "../../redux/authSlice";
import { useSelector } from "react-redux";
import { selectPastimes } from "../../redux/pastimeSlice";

const Photos = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
    // console.log(userInput);
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(setNewUser(userInput));
  //   dispatch(setScreen(4));
  // };

  return (
    <>
      <div className="signup-container">
        <div className="signup-form">
          <div className="flex-row">
            <h3>Add some photos!</h3>
          </div>

          <form onInput={onInput} onSubmit={onSubmit} className="form flex-col">
            <div className="flex-col form-input">
              <label htmlFor="bio">Add a short bio</label>

              <textarea
                id="bio"
                name="bio"
                rows="5"
                cols="33"
                placeholder="let others know a bit about you"
                className="input"
              ></textarea>
            </div>
            <div className="flex-col form-input"></div>
            <div className="flex-col form-input"></div>
            <button className="btn">Next</button>
          </form>
        </div>
        <div className="auth-button-container">
          <h3>Back</h3>
        </div>
      </div>
    </>
  );
};

export default Photos;
