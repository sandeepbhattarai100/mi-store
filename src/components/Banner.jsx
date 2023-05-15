import Carousel from "react-bootstrap/Carousel";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Banner = ({ banner }) => {
  return (
    <div className="Banner">
      <Carousel fade>
        {banner.map((item, index) => (
          <Carousel.Item key={index} interval={5000} keyboard={true}>
            <img
              className="d-block w-100"
              src={item.image}
              alt={`${index} banner`}
            />
            <Carousel.Caption>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.source}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
