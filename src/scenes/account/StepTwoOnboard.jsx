import Select from "react-select";
import { useSelector } from "react-redux";
import { selectPastimes } from "../../redux/pastimeSlice";

const StepTwoOnboard = ({ handleStep, onInput, onSubmit }) => {
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
                rows="3"
                cols="33"
                placeholder="let others know a bit about you"
                className="input"
              ></textarea>
            </div>
            <div className="flex-col form-input">
              <label htmlFor="pastimes">Select your favourite pastimes</label>
              <Select
                onChange={(value) => {
                  onInput({ target: { id: "pastimes", value: value } });
                }}
                id="pastimes"
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
                rows="3"
                cols="33"
                placeholder="share your goal"
                className="input"
              ></textarea>
            </div>
            <div className="flex-col form-input">
              <label htmlFor="socialLink">Help others find you</label>
              <input
                type="url"
                id="socialLink"
                name="socialLink"
                placeholder="link to your instagram profile"
                className="input"
                required
              ></input>
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
            className="link-light"
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
