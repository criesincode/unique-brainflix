import React from "react";
import "./Hero.scss"

const Hero = ({ videoDetails }) => {
  
    return (
    <section className="hero">
        <div className="hero__container">
        <video className="hero__video" poster={videoDetails.image} controls > 
        </video>
        </div>
    </section>
    )
}

export default Hero;