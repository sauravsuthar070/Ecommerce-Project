import React from "react";
import "./Hero.css";
import hand_icon from "../Assegts/hand_icon.png";
import arrow_icon from "../Assegts/arrow.png";
import hero_image from "../Assegts/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>new arrivals only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" srcset="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>latest collection</div>
            <img src={arrow_icon} alt="" srcset="" />
        </div>
      </div>
      <div className="hero-right">
              <img src={hero_image} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Hero;
