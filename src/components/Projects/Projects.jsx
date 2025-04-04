import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'
const projects = [
    {name: "Twitter Clone", className: "one", icon: <i class="fa-brands fa-twitter"></i>, description: "A simple fullstack Twitter clone web application. It contains features like the login, tweeting, direct messages, notifications, searching users, and profile systems.", skills: ["React", "Node", "Express", "MongoDB"], github:"https://github.com/wliu1211/twitter-clone-frontend", animateType: "zoom-in", animateDelay: "500"},
    {name: "Cryptocurrency Tracker", className: "three", icon: <i class="fa-brands fa-bitcoin"></i>,  description: "A fullstack Crypto Tracker application that displays the stats of various cryptocurrency that is fetched from the Coingecko API. The user can see the charts of the crypto market price. They can also make watchlists that is saved into the database.", skills: ["React", "Node", "Express", "MongoDB"], github:"https://github.com/wliu1211/crypto-tracker",  animateType: "zoom-in", animateDelay: "700"},
    {name: "eCommerce Site", className: "four", icon: <i class="fa-solid fa-cart-shopping"></i>, description: "A simple fullstack online shopping website that handles the items displayed, cart, shipping, and payment systems. It fetches the apis of a third-party database website for their data and displays it. It handles price calculations, sorting, input errors, and more.", skills: ["React", "Node", "Express", "APIs"], github:"https://github.com/wliu1211/full-stack-ecommerce",  animateType: "zoom-in", animateDelay: "800"},
    {name: "PCOS Detection System", className: "five", icon: <i class="fa-solid fa-laptop-code"></i>, description: "A machine learning project that contains various predictive models for early detection of Polycystic Ovary Syndrome using datasets of various parameters. Plots and graphs were used to identify any significant features or trends in the dataset to have the models learn from.", skills: ["Python"], github:"https://github.com/wliu1211/nyu-dsbc-project",  animateType: "zoom-in", animateDelay: "800"},
    {name: "26 Puzzle Solver", className: "six", icon: <i class="fa-solid fa-robot"></i>, description: "An artificial intelligence puzzle solver that solves a 26 puzzle problem in 3x3x3 grid. There are 26 numbered tiles and 1 blank spot in the grid. The program is given an initial state and a goal state by moving the tiles one by one into the blank spot until the goal state has been achieved.", skills: ["C++"], github:"https://github.com/wliu1211/26-puzzle-solver",  animateType: "zoom-in", animateDelay: "800"},
]

function Projects() {
  return (
    <section id="projects" data-aos="fade-out">
        <div className="project-header-container">
            <h1 className="projects-header">Projects</h1>
            <div className="header-border"></div>
        </div>
        <div className="cards-container">
            {projects.map((project, index)=> (
                <ProjectCard 
                    key={index}
                    index={index}
                    project={project}
                />
            ))}
        </div>
    </section>
  )
}

export default Projects