import React from "react";
import "../styles/productReviews.css";
import ProductReviewsCard from "./ProductReviewsCard";

const ProductReviews = ({ products }) => {
  return (
    <div className="productReviews">
      {products &&
        products.map((item, index) => (
          <ProductReviewsCard
            key={item.image}
            image={item.image}
            review={item.review}
            name={item.name}
            price={item.price}
          />
        ))}
    </div>
  );
};

export default ProductReviews;
