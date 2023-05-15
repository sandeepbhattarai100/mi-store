import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/offer.css';

const Offer = ({ index,src,link}) => {
    return <div className="offer">
        <Link to={link
        }>
<img src={src} alt={`${index} offer`} />
        </Link>
  </div>;
};

export default Offer;
