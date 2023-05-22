import React from 'react'

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import ProjectCard from '../components/ProjectCard';

const Project = () => {
  return (
    <div>
        <NavBar />
        <HeroImg2 heading="PROJECTS." text="Some of my recent works"/>
        <ProjectCard />
        <Footer />
    </div>
  )
}

export default Project