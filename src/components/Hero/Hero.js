import React from "react";
import "./Hero.scss"

const Hero = ({ videoDetails }) => {
  
    return (
    <section className="hero">
        <video className="hero__video" poster={videoDetails.image}>
        </video>
    </section>
    )
}

export default Hero;