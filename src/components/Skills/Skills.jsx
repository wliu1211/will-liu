import React, {useEffect} from 'react'
import "./Skills.css"
import Aos from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    Aos.init({duration: 1500});
    Aos.refresh();
  }, [])
  
  return (
    <div id="skills">
      <div className="skills-header-container"  data-aos="fade-out">
        <h1 className="skills-header">Skills</h1>
        <div className="header-border"></div>
      </div>
      <div className="skills-container">
        <div className='front-container' data-aos="fade-right">
          <div className="front-header">
            <h3>Frontend Skills</h3>
          </div>
          <div className="front-body">
            <div className="body-wrapper">
              <div className="list-wrapper html" data-aos="fade-right" data-aos-delay="500">
                <i class="fa-brands fa-html5"></i>
                <p className='front-list'>HTML</p>
              </div>
              <div className="list-wrapper css" data-aos="fade-left" data-aos-delay="750">
                <i class="fa-brands fa-css3-alt"></i>
                <p className='front-list'>CSS</p>
              </div>
              <div className="list-wrapper javascript" data-aos="fade-right" data-aos-delay="1000">
                <i class="fa-brands fa-square-js"></i>
                <p className='front-list'>Javascript</p>
              </div>
              <div className="list-wrapper react" data-aos="fade-left" data-aos-delay="1250">
                <i class="fa-brands fa-react"></i>
                <p className='front-list'>React</p>
              </div>
              <div className="list-wrapper bootstrap" data-aos="fade-right" data-aos-delay="1500">
                <i class="fa-brands fa-bootstrap"></i>
                <p className='front-list'>Bootstrap</p>
              </div>

            </div>
          </div>
        </div>
        <div className="back-container" data-aos="fade-down">
          <div className="back-header">
            <h3>Backend Skills</h3>
          </div>
          <div className="back-body">
            <div className="body-wrapper">
              <div className="list-wrapper node" data-aos="fade-right" data-aos-delay="500">
                <i class="fa-brands fa-node"></i>
                <p className='back-list'>Node</p> 
              </div>
              <div className="list-wrapper webSockets" data-aos="fade-left" data-aos-delay="750">
                <i class="fa-solid fa-plug"></i>
                <p className='back-list'>Web Sockets</p>
              </div>
              <div className="list-wrapper apis" data-aos="fade-right" data-aos-delay="1000">
                <i class="fa-solid fa-gear"></i>
                <p className='back-list'>APIs</p>
              </div>
              <div className="list-wrapper mongo" data-aos="fade-left" data-aos-delay="1250">
                <i class="fa-solid fa-database"></i>
                <p className='back-list'>MongoDB</p>

              </div>
            </div>
          </div>
        </div>
        <div className="other-container" data-aos="fade-left">
          <div className="other-header">
            <h3>Other Skills</h3>
          </div>
          <div className="other-body">
            <div className="body-wrapper">
              <div className="list-wrapper unity" data-aos="fade-right" data-aos-delay="500">
                <i class="fa-brands fa-unity"></i>
                <p className='back-list'>Unity</p> 
              </div>
              <div className="list-wrapper python" data-aos="fade-left" data-aos-delay="500">
                <i class="fa-brands fa-python"></i>
                <p className='back-list'>Python</p> 
              </div>
              <div className="list-wrapper cpp" data-aos="fade-right" data-aos-delay="750">
                <i class="fa-solid fa-c"></i>
                <p className='back-list'>C++</p>
              </div>
              <div className="list-wrapper github" data-aos="fade-left" data-aos-delay="1000">
                <i class="fa-brands fa-github"></i>
                <p className='back-list'>Github</p>

              </div>
              
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills