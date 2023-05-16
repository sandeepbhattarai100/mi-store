import React from "react";
import "../styles/footer.css";
import LoopIcon from "@mui/icons-material/Loop";
import GppGoodIcon from "@mui/icons-material/GppGood";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
const Footer = ({ footer }) => {
  return (
    <div>
      <div className="prefoot1">
        <div>
          <LoopIcon />
          <p>
            <b> Hassle Free Replacement</b>
            <br />
            10 days Replacement policy in mi.ocm
          </p>
        </div>
        <div>
          <GppGoodIcon />
          <p>
            <b>100% secure payments</b>
            <br />
            we support Cards,Wallets,Emi and COD
          </p>
        </div>
        <div>
          <AutoStoriesIcon />
          <p>
            <b>Vast Servece Network</b>
            <br />
            90 mi service center accross nepal
          </p>
        </div>
      </div>
      <div className="prefoot2">
        <div>
          <p>
            <b>LET'S STAY IN TOUCH</b>
            <br />
            Get updates on sales and special offers
          </p>
        </div>
        <div>
          <input type="text" placeholder="Enter Email Address" />
        </div>
        <div>
          <p>
            <b>FOLLOW MI</b>
            <br />
            we want to hear form you
          </p>
        </div>
        <div>
          <span>
            <FacebookIcon />
          </span>
          <span>
            <YouTubeIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <LinkedInIcon />
          </span>
        </div>
      </div>
      <div className="footer">
        <div >
          <p>support</p>

          {footer.support.map((item, index) => (
            <Link to={item.url} key={index}>{item.name}</Link>
          ))}
        </div>
        <div>
          <p>Contact Us</p>
          {footer.contactUs.map((item, index) => (
            <Link to={item.url}>{item.name}</Link>
          ))}
        </div>
        <div>
          <p>Retail store</p>
          {footer.retailStore.map((item, index) => (
            <Link to={item.url}>{item.name}</Link>
          ))}
        </div>
        <div>
          <p>About us</p>
          {footer.aboutUS.map((item, index) => (
            <Link to={item.url}>{item.name}</Link>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default Footer;
