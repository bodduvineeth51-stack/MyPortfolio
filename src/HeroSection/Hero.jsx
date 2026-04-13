import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">

      {/* FULLSCREEN IMAGE */}
      <img
        src="https://res.cloudinary.com/dpcusvwko/image/upload/v1775992619/Screenshot_2026-04-12_164646_a9ixgk.png"
        alt="profile"
        className="hero-img"
      />

      {/* DARK OVERLAY */}
      <div className="overlay"></div>

      {/* MOVING TEXT */}
      <div className="marquee">
        <div className="track">
          <h1>
             Vineeth Boddu  Vineeth Boddu  Vineeth Boddu 
          </h1>
        </div>
      </div>

    </section>
  );
};

export default Hero;