import React from "react";
import Slider from "react-slick";
import brand1 from '../Assets/brand1.jpg'
import brand2 from '../Assets/brand2.jpg'
import brand3 from '../Assets/brand3.jpg'
import brand4 from '../Assets/brand4.png'
import brand5 from '../Assets/brand5.jpg'
import brand6 from '../Assets/brand6.png'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SliderBrand() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img width={150} height={150} src={brand1} alt="Brand1" />
        </div>
        <div>
          <img width={150} height={150} src={brand2} alt="Brand2" />
        </div>
        <div>
          <img width={150} height={150} src={brand3} alt="Brand3" />
        </div>
        <div>
          <img width={150} height={150} src={brand4} alt="Brand4" />
        </div>
        <div>
          <img width={150} height={150} src={brand5} alt="Brand5" />
        </div>
        <div>
          <img width={150} height={150} src={brand6} alt="Brand6" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderBrand;

