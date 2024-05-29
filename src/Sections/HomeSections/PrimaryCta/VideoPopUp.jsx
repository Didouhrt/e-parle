import { useState, useEffect, useRef } from "react";
import { FaRegWindowClose } from "react-icons/fa";

const VideoPopUp = ({ closePopUp, isPopUpOpen }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPopUpOpen) {
      // Start playing the video when the popup is open
      setIsVideoPlaying(true);
    } else {
      // Stop and reset the video when the popup is closed
      setIsVideoPlaying(false);
      if (playerRef.current) {
        playerRef.current.seekTo(0);
      }
    }
  }, [isPopUpOpen]);

  return (
    <div
      className={`${
        isPopUpOpen ? "activePopUp" : ""
      } video_popup_overlay flex_center`}
      onClick={closePopUp}
    >
      <button onClick={closePopUp}>
        <FaRegWindowClose color="white" size={25} />
      </button>

      <video
        src="https://ik.imagekit.io/img5b6kvn/souiPanel/videos/tr:w-300/souipanel_about.mp4"
        autoPlay
        muted
        controls
        width="400px"
      ></video>
    </div>
  );
};

export default VideoPopUp;
