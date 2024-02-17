import React, {useState, useEffect} from 'react'
import Modal from '../Modal/Modal';

function ProjectCard({project}) {
    const {name, animateType, animateDelay,icon, description, skills, github} = project;

    const openSource = (e) => {
        e.stopPropagation();
    }
  return (
    <>
        <div className="card-container" data-aos={animateType} data-aos-delay={animateDelay}>
            <div className="card-header">
                <h3>{name}</h3>
                {icon}
            </div>
            <div className="card-description">
                <p>{description}</p>
            </div>
            <div className="card-skills">
                {skills.map((skill)=> (
                    <p>{skill}</p>
                ))}
            </div>
            <div className="card-cta">
                <button className="open-source-btn" onClick={openSource}>
                    <a href={github}>Open Source</a>
                    <i class="fa-brands fa-github"></i>
                </button>
            </div>
        </div>
    </>
  )
}

export default ProjectCard