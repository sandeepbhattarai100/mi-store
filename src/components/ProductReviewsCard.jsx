import React from "react";
import '../styles/productReviewsCard.css';

const ProductReviewsCard = ({ image, review, name, price }) => {
    return <div className="productReviewsCard">
        <img src={image} alter="reviews" />
        <h5>{name}</h5>
        <span>{price}</span>
        <p>{review}</p>
  </div>;
};

export default ProductReviewsCard;
