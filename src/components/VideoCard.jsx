import React from "react";
import { Link } from "react-router-dom";
import "../styles/videoCard.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const VideoCard = ({ name, image }) => {
  return (
    <div className="videoCard" style={{ backgroundImage: `url(${image})` }}>
      <Link to="#/"><PlayArrowIcon/></Link>
      <p>{name}</p>
    </div>
  );
};

export default VideoCard;
