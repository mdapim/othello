import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Main.css";

export default function Car() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
  };
  return (
    <div style={{ height: "500px" }}>
      <Slider {...settings}>
        <div>
          <img
            className="img-wrap"
            src={process.env.PUBLIC_URL + "/Images/drinks.jpeg"}
            alt="img"
          />
        </div>
        <div>
          <img
            className="img-wrap"
            src={process.env.PUBLIC_URL + "/Images/main.jpeg"}
            alt="img"
          />
        </div>
        <div>
          <img
            className="img-wrap"
            src={process.env.PUBLIC_URL + "/Images/steak.jpeg"}
            alt="img"
          />
        </div>
        <div>
          <img
            className="img-wrap"
            src={process.env.PUBLIC_URL + "/Images/feed.jpeg"}
            alt="img"
          />
        </div>
      </Slider>
    </div>
  );
}
