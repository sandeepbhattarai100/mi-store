import React from "react";
import "../styles/hotAccessoriesMenu.css";
import { Link } from "react-router-dom";

const HotAccessoriesMenu = () => {
  return (
    <div className="HotAccessoriesMenu">
      <Link to="/" className="homeAccessLinks">
        Music Store
      </Link>
      <Link to="/smartdevice" className="homeAccessLinks">
        Smart Devices
      </Link>
      <Link to="/home" className="homeAccessLinks">
        Home
      </Link>
      <Link to="/lifestyle" className="homeAccessLinks">
        Lifestyles
      </Link>
      <Link to="/mobile" className="homeAccessLinks">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default HotAccessoriesMenu;
