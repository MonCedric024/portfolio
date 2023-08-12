import "./ProjectCardStyle.css"
import ProjectCard from "./ProjectCard"
import ProjectCardData from "./ProjectCardData"

import React from 'react'

const Project = () => {
  return (
        <div className="work-container">
            <div className="project-container">
                {ProjectCardData.map((val, ind) => {
                    return (
                        <ProjectCard
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        logo={val.logo}
                        view={val.view}
                        />
                    );
                })}
            </div>
        </div>

  )
}

export default Project