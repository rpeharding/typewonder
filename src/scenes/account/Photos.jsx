import Webcam from "react-webcam";
import WebcamComp from "../../components/WebcamComp";
import { useState } from "react";

const Photos = ({
  onInput,
  handleStep,
  onSubmit,
  profilePhotoSelector,
  multiplePhotosSelector,
  uploadProfileImages,
}) => {
  const [openWebcam, setOpenWebcam] = useState(false);
  const openWebcamWindow = () => setOpenWebcam(!openWebcam);
  return (
    <>
      <div className="signup-container">
        <div className="signup-form">
          <div className="flex-row">
            <h3>Add some photos!</h3>
          </div>

          <form onInput={onInput} onSubmit={onSubmit} className="form flex-col">
            <div className="flex-col form-input">
              <label htmlFor="mainImage">Select or take a profile photo</label>
              <input
                id="mainImage"
                type="file"
                name="mainImage"
                onChange={(e) => {
                  profilePhotoSelector(e);
                }}
              />

              <p className="underline" onClick={openWebcamWindow}>
                {openWebcam ? " close webcam" : "use webcam"}
              </p>
            </div>
            <div>{openWebcam && <WebcamComp onInput={onInput} />}</div>
            <div className="flex-col form-input">
              <label htmlFor="profileImages">
                Upload some adventure photos
              </label>
              <input
                id="profileImages"
                type="file"
                name="profileImages"
                multiple
                onChange={(e) => {
                  multiplePhotosSelector(e);
                }}
              />
            </div>
            <div className="flex-col form-input"></div>
            <button className="btn">Next</button>
          </form>
        </div>
        <div className="auth-button-container">
          <h3
            onClick={() => {
              uploadProfileImages;
              handleStep(2);
            }}
          >
            Back
          </h3>
        </div>
      </div>
    </>
  );
};

export default Photos;
