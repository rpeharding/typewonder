import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

const WebcamComp = ({ onInput, setUserInput, userInput }) => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    setUserInput({ ...userInput, mainImage: imageSrc });
  }, [webcamRef]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  return (
    <>
      <div className="webcam">
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <button className="secondary-btn" onClick={capture}>
          {!url ? "Capture photo" : "take another"}
        </button>

        {/* <div className="screenshot">{url && <img src={url}></img>}</div> */}
      </div>
    </>
  );
};

export default WebcamComp;
