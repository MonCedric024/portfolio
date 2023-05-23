import "./FooterStyle.css"

import React from 'react'

import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "white", marginRight: "2rem"}}/>
                    <div>
                        <p>Blk 60 Lot 36 Northville 2b</p>
                        <p>Caloocan City, Philippines</p>
                    </div>
                </div>
                <div className="phone"> 
                    <h4><FaPhone size={20} style={{color: "white", marginRight: "2rem"}}/>
                    +639480804906</h4>
                </div>
                <div className="email"> 
                    <h4><FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}}/>
                    moncedricavila@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is me Mon Cedric Avila 4th year student of Quezon City University.</p>
                <div className="social">
                <a href="https://www.facebook.com/avilamon024" target="_blank" rel="facebook">
                <FaFacebook size={20} style={{ color: "white", marginRight: "2rem" }} />
                </a>
                <a href="https://www.instagram.com/cedricavila/" target="_blank" rel="instagram">
                <FaInstagram size={20} style={{ color: "white", marginRight: "2rem" }} />
                </a>
                <a href="" target="_blank" rel="twitter">
                <FaTwitter size={20} style={{ color: "white", marginRight: "2rem" }} />
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer