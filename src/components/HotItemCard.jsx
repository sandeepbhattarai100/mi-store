import React from "react";
import "../styles/hotItemcard.css";

const HotItemCard = ({ name, price, image }) => {
  return (
    <div className="HotItemCard">
      <img src={image}></img>
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default HotItemCard;
