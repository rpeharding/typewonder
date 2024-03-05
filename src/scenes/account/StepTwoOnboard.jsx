import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewUser } from "../../redux/userSlice";
import Select from "react-select";
import { setScreen } from "../../redux/authSlice";
import { useSelector } from "react-redux";
import { selectPastimes } from "../../redux/pastimeSlice";

const StepTwoOnboard = ({ handleStep, onInput, onSubmit }) => {
  const dispatch = useDispatch();

  const pastimes = useSelector(selectPastimes);

  const pastimeOptions =
    pastimes &&
    pastimes.map((pastime) => {
      return { label: pastime, value: pastime };
    });

  console.log(pastimeOptions);

  return (
    <>
      <div className="signup-container onboard-container">
        <div className="signup-form">
          <div className="flex-row">
            <h3>Share a bit about yourself</h3>
          </div>

          <form
            onInput={onInput}
            onSubmit={onSubmit}
            className="form flex-col onboard-form"
          >
            <div className="flex-col form-input">
              <label htmlFor="bio">Add a short bio</label>

              <textarea
                id="bio"
                name="bio"
                rows="4"
                cols="33"
                placeholder="let others know a bit about you"
                className="input"
              ></textarea>
            </div>
            <div className="flex-col form-input">
              <label htmlFor="yearsWithTypeOne">
                Select your favourite pastimes
              </label>
              <Select
                id="yearsWithTypeOne"
                defaultValue={""}
                isMulti
                name="pastimes"
                options={pastimeOptions}
                className="form-input flex-col "
                classNamePrefix="select"
              />
            </div>
            <div className="flex-col form-input">
              <label htmlFor="goal">
                What's something you'd like to achieve with T1D?
              </label>
              <textarea
                id="goal"
                name="goal"
                rows="4"
                cols="33"
                placeholder="share your goal"
                className="input"
              ></textarea>
            </div>
            <button
              className="btn"
              onClick={() => {
                handleStep(3);
              }}
            >
              Next
            </button>
          </form>
        </div>
        <div className="auth-button-container">
          <h3
            onClick={() => {
              handleStep(1);
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
