import { useDispatch } from "react-redux";
import WebcamComp from "../../components/WebcamComp";
import { useState } from "react";
import { setScreen } from "../../redux/authSlice";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { setNewUser } from "../../redux/userSlice";

const Photos = ({
  onInput,
  handleStep,
  onSubmit,
  profilePhotoSelector,
  multiplePhotosSelector,
  uploadProfileImages,
  setUserInput,
  userInput,
}) => {
  const [openWebcam, setOpenWebcam] = useState(false);
  const dispatch = useDispatch();
  const [tempMainFile, setTempMainFile] = useState(true);

  const openWebcamWindow = () => {
    setOpenWebcam(!openWebcam), setTempMainFile(!tempMainFile);
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-form">
          <div className="flex-row">
            <h3>Add some photos!</h3>
          </div>

          <form onInput={onInput} onSubmit={onSubmit} className="form flex-col">
            <label className="photo-label" htmlFor="mainImage">
              Profile photo
            </label>
            <div className="flex-col form-input">
              <div className="image-upload-choice">
                <Tabs className="Tabs">
                  <TabList>
                    <Tab
                      onClick={() => {
                        setUserInput({ ...userInput, mainImage: "" });
                      }}
                    >
                      Upload File
                    </Tab>
                    <Tab
                      onClick={() => {
                        setUserInput({ ...userInput, mainImage: "" });
                      }}
                    >
                      Use Webcam
                    </Tab>
                  </TabList>
                  <TabPanel>
                    <input
                      id="mainImage"
                      type="file"
                      name="mainImage"
                      onChange={(e) => {
                        profilePhotoSelector(e);
                      }}
                    />
                    {userInput.mainImage && (
                      <div className="current-selection">
                        <p>Selected Image</p>
                        <img src={userInput.mainImage}></img>
                      </div>
                    )}
                  </TabPanel>
                  <TabPanel>
                    <WebcamComp
                      userInput={userInput}
                      setUserInput={setUserInput}
                      onInput={onInput}
                    />
                  </TabPanel>
                </Tabs>
              </div>
            </div>

            <div className="flex-col form-input">
              <label className="photo-label" htmlFor="profileImages">
                Add extra adventure photos
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
            <div className="preview-img-container">
              {userInput.profileImages.length > 0 &&
                Array.from(userInput.profileImages).map((image) => {
                  return (
                    <>
                      <img className="preview-img" src={image} />
                    </>
                  );
                })}
            </div>
            <div className="flex-col form-input"></div>
            <button
              className="btn"
              onClick={() => {
                dispatch(setNewUser(userInput));
                dispatch(setScreen(1));
              }}
            >
              Complete profile set up
            </button>
          </form>
        </div>

        <div className="auth-button-container">
          <h3
            className="link-light"
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
