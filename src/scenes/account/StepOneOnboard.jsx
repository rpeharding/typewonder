import CurrentLocation from "../../components/CurrentLocation";
import LocationInput from "../../components/LocationInput";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const StepOneOnboard = ({
  handleStep,
  onSubmit,
  onInput,
  setUserInput,
  userInput,
  calculateDiagnosisYear,
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
            <Tabs className="Tabs">
              <TabList>
                <Tab>Enter place</Tab>
                <Tab>Use location</Tab>
              </TabList>
              <TabPanel>
                <LocationInput
                  setUserInput={setUserInput}
                  userInput={userInput}
                />
              </TabPanel>
              <TabPanel>
                <CurrentLocation
                  setUserInput={setUserInput}
                  userInput={userInput}
                />
              </TabPanel>
            </Tabs>
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
          className="link-light"
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
