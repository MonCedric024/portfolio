import "./ProjectCardStyle.css"

import React from 'react'
import Project1 from "../assets/Project1.png"
import { NavLink } from "react-router-dom"

const ProjectCard = () => {
  return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={Project1} alt="" />
                    <h2 className="project-title">Project Title</h2>
                    <div className="project-details">
                    <p>This is text</p>
                        <div className="project-btn">
                            <NavLink to="https://librarymanagementsystemsbit3j.epizy.com/login.php" target="_blank" className="btn">
                            View
                            </NavLink>
                            <NavLink to="https://librarymanagementsystemsbit3j.epizy.com/login.php" target="_blank" className="btn">
                            Repository
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default ProjectCard