import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

const WebcamComp = ({ onInput }) => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    onInput({
      target: { id: "mainImage", value: webcamRef.current.getScreenshot() },
    });
  }, [webcamRef]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button className="secondary-btn" onClick={capture}>
        Capture photo
      </button>
    </>
  );
};

export default WebcamComp;
