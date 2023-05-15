import React from "react";
import { Link } from "react-router-dom";
import '../styles/starproduct.css';

const StarProducts = ({ starproducts }) => {
  return (
    <div className="starproduct">
      <div>
        <Link to={starproducts[0].url}>
          <img src={starproducts[0].image} alt="first product"></img>
        </Link>
          </div>
          <div>
              <Link to={starproducts[1].url}><img src={starproducts[1].image} /></Link>
              <Link to={starproducts[2].url}><img src={starproducts[2].image} /></Link>
              <Link to={starproducts[3].url}><img src={starproducts[3].image} /></Link>
</div>
    </div>
  );
};

export default StarProducts;
