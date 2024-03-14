import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import camera from "../assets/camera-btn.png";
import cross from "../assets/cross-btn.png";

const WebcamComp = ({ onInput, setUserInput, userInput }) => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    setUserInput({ ...userInput, mainImage: imageSrc });
  }, [webcamRef]);

  const videoConstraints = {
    width: 720,
    height: 1280,
    facingMode: "user",
  };
  return (
    <>
      <div className="webcam">
        <Webcam
          audio={false}
          height={1280}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={720}
          videoConstraints={videoConstraints}
        />

        <img src={camera} className="capture-btn" onClick={capture} />

        <div>
          {url && (
            <div>
              <img className="screenshot" src={url}></img>
              <img
                src={cross}
                className="capture-btn"
                onClick={() => {
                  setUrl(null), setUserInput({ ...userInput, mainImage: "" });
                }}
              />
            </div>
          )}
        </div>
      </div>
      {userInput.mainImage && <p>image selected!</p>}
    </>
  );
};

export default WebcamComp;
