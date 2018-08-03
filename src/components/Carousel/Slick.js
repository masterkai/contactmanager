import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="mb-3">
        <h1 className="display-4 mb-2">
          <span className="text-danger">Single</span> Item
        </h1>
        <Slider {...settings}>
          <div>
            <img src="http://via.placeholder.com/1920x768" alt="" />
          </div>
          <div>
            <img src="http://via.placeholder.com/1920x768" alt="" />
          </div>
          <div>
            <img src="http://via.placeholder.com/1920x768" alt="" />
          </div>
          <div>
            <img src="http://via.placeholder.com/1920x768" alt="" />
          </div>
          <div>
            <img src="http://via.placeholder.com/1920x768" alt="" />
          </div>
          <div>
            <img src="http://via.placeholder.com/1920x768" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
