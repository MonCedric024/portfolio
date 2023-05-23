import "./HeroImgStyle.css";

import React from 'react'

import BackgroundImg from "../assets/home-background.jpg"
import { Link } from "react-router-dom";

const heroimage = () => {
  return <div className="hero">
      <div className="mask">
        <img className="img" src={BackgroundImg} alt="BakcgroundImg"/>
      </div>
      <div className="content">
        <p>HI, IM MON CEDRIC.</p>
        <h1>Qcu Student.</h1>
        <div className="button-container">
           <Link to="/project" className="btn btn-light">PROJECTS</Link>
           <Link to="/contact" className="btn">CONTACT</Link>
      </div>
      </div>
    </div>
}

export default heroimage