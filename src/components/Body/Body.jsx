import React, {useState} from 'react'
import './Body.css'
import About from '../About/About';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
function Body() {
    const [colorBool, setColorBool] = useState(false)
    const handleClick = () => {
        setColorBool(!colorBool);
    }
  return (
    <section className="body" onClick={handleClick}>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </section>
  )
}

export default Body