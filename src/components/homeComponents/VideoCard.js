import React from "react";
import ReactPlayer from "react-player";
import "./videoCard.css";

const VideoCard = () => {
   const src = "https://youtu.be/0qNJF_vUb5M";
   return (
      <div className="p-5 text-start relative video_wrapper mx-auto">
         <ReactPlayer
            url={src}
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
         />
      </div>
   );
};

export default VideoCard;
