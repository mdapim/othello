import React from "react";
import FeaturedCard from "../FeatauredCard/FetauredCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Featured() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  const food = ["crab", "sea", "garlic", "pan"];

  return (
    <div className="h-screen/2 w-100% p-10 overflow-hidden relative">
      <img
        src={process.env.PUBLIC_URL + "/Images/olive.jpeg"}
        alt="op"
        className="opacity-10 p-10 absolute top-0 left-0 w-screen h-auto z-0" //inset-x-80 inset-y-24
      />
      <div className="m-auto z-10">
        <h1 className="text-center t-40 text-5xl text-black">
          {" "}
          Popular Dishes
        </h1>
        <h3 className="text-white text-xl text-center">
          {" "}
          ----------- &#x2605; &#x2605; &#x2605; &#x2605; &#x2605; ------------{" "}
        </h3>
        <br />
        <div
          className="w-screen h-72
"
        >
          <Slider {...settings}>
            <FeaturedCard item="crab" />
            <FeaturedCard item="sea" />
            <FeaturedCard item="garlic" />
            <FeaturedCard item="pan" />
            
          </Slider>
        </div>
        <br />
        <h3 className="text-black text-xl text-center">
          {" "}
          ----------- &#x2605; &#x2605; &#x2605; &#x2605; &#x2605; ------------{" "}
        </h3>
      </div>
    </div>
  );
}
