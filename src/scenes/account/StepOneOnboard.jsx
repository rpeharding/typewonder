const StepOneOnboard = ({
  handleStep,
  onSubmit,
  onInput,
  calculateDiagnosisYear,
  getLocationDetails,
}) => {
  return (
    <div className="signup-container onboard-container">
      <div className="signup-form">
        <div className="flex-row">
          <h3>Let's create your profile!</h3>
        </div>

        <form
          onInput={onInput}
          onSubmit={onSubmit}
          className="form flex-col onboard-form"
        >
          <div className="flex-col form-input">
            <label htmlFor="birthdate">When is your birthday?</label>
            <input type="date" name="birthdate" id="birthdate" required />
          </div>
          <div className="flex-col form-input">
            <label htmlFor="yearOfDiagnosis">
              How many years have you had T1D?
            </label>
            <input
              type="text"
              name="yearOfDiagnosis"
              id="yearOfDiagnosis"
              onChange={(e) => {
                calculateDiagnosisYear(e.target.value);
              }}
            />
          </div>
          <div className="flex-col form-input">
            <label htmlFor="location">Where are you based?</label>
            <input
              type="text"
              name="location"
              id="location"
              required
              onChange={(e) => {
                getLocationDetails(e.target.value);
              }}
            />
          </div>
          <button
            className="btn"
            onClick={() => {
              handleStep(2);
            }}
          >
            Next
          </button>
        </form>
      </div>
      <div className="auth-button-container">
        <h3
          onClick={() => {
            handleStep(0);
          }}
        >
          Back
        </h3>
      </div>
    </div>
  );
};

export default StepOneOnboard;
