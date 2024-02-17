import React from 'react'
import './About.css'


function About() {
  return (
    <div id="about" data-aos="zoom-in" >
      <div className="about-info">
        <div className="about-header">
          <h2>About</h2>
          <div className="header-border"></div>
        </div>
        <div className="about-container">
          <p>I started web development back when COVID first started. I came across an interesting video that peaked my interest regarding to building websites. Now, I enjoy building websites from the client side to the server side. I am also currently a full time student working on other programming projects relating to more server side development. </p>
        </div>
      </div>
      <div className="img-wrapper"></div>
    </div>
  )
}

export default About