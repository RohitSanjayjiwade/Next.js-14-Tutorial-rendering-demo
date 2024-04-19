"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import {serverSideFunction} from "@/utils/server-utils"

const Image = ()=>{
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://source.unsplash.com/random/?Cryptocurrency/" alt="crypto" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random/?nature/" alt="nature" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random/?game/" alt="game" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
  );
}

export default Image;