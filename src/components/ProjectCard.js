import "./ProjectCardStyle.css"


import React from 'react'
import { NavLink } from "react-router-dom"

const ProjectCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="" className="image"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="project-logo">
        {props.logo.map((icon, index) => (
        <span key={index}>{icon}</span>
        ))}
         </div>
        <div className="project-details">
        <p>{props.text}</p>
            <div className="project-btn">
                <NavLink to={props.view} target="_blank" alt="/contact" className="btn">
                VIEW
                </NavLink>
                <NavLink to="/contact" className="btn">
                SOURCE
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard