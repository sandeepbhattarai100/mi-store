import React from "react";
import "../styles/videos.css";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <div className="videos">
      {videos && videos.map((item,index) => <VideoCard name={item.name} image={item.image} key={item.image} index={item.index} />)}
    </div>
  );
};

export default Videos;
