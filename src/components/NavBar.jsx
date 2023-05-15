import React from "react";
import "../styles/navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img
            id="logoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/1024px-Xiaomi_logo.svg.png"
            alt="Not"
          />
        </Link>
      </div>

      <Link className="navlinks" to="/miphones">
        Mi Phones
      </Link>
      <Link className="navlinks" to="/redmiphones">
        Redmi Phones
      </Link>
      <Link className="navlinks" to="/tv">
        TV
      </Link>
      <Link className="navlinks" to="/laptops">
        Laptops
      </Link>
      <Link className="navlinks" to="/lifestyle">
        Fitness & Lifestyle
      </Link>
      <Link className="navlinks" to="/home">
        Home
      </Link>
      <Link className="navlinks" to="/audio">
        Radio
      </Link>
      <Link className="navlinks" to="/accessories">
        Accessories
      </Link>

      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Products" />
        <SearchOutlinedIcon />
      </div>
    </div>
  );
};

export default NavBar;
