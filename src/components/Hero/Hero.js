import React from "react";
import "./Hero.scss"

const Hero = ({ videoDetails }) => {
  
    return (
    <section className="hero">
        <video className="heroVideo" poster={videoDetails.image}>
        </video>
    </section>
    )
}

export default Hero;