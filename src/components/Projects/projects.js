import React from 'react'
import './projects.css';
import rock from '../../assests/rock_game.png'
import e_commerce from '../../assests/e-commerce.jpg'
import ambulance from '../../assests/ambulance_tarcker.webp'

const Projects = () => {
  return (
    <section id="projects">
      <div className="projectstitle">
        My Projects
      </div>
      <div className="projectsdiv">
        <div className="project project1">
          <div className="projectpic">
            <img src={ambulance} alt="ambulance" className="notepad"/>
          </div>
          <div className="projectname ambulance">
            <p>Ambulance Tracker and Informer</p>
          </div>
          <div className="projectbtns">
            <a href="https://github.com/Pushpa-Harshitha05/Ambulance_tracker-and-Informer" target="_blank" rel="noopener noreferrer" className="btns">GitHub</a>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer" className="btns">Live</a>
          </div>
        </div> 
        <div className="project project1">
          <div className="projectpic">
            <img src={rock} alt="game"/>
          </div>
          <div className="projectname">
            <p>Rock Paper Scissors</p>
          </div>
          <div className="projectbtns">
            <a href="https://github.com/Pushpa-Harshitha05/rock_paper_scissors" target="_blank" rel="noopener noreferrer" className="btns">GitHub</a>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer" className="btns">Live</a>
          </div>
        </div>
        <div className="project project2">
          <div className="projectpic">
            <img src={e_commerce} alt="e-commerce" className="e_comm"/>
          </div>
          <div className="projectname electronics">
            <p>Guru Electronics and Mobile Accessories</p>
          </div>
          <div className="projectbtns">
            <a href="https://github.com/Pushpa-Harshitha05/Electronics-Website" target="_blank" rel="noopener noreferrer" className="btns">GitHub</a>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer" className="btns">Live</a>
          </div>
        </div>
        <div className="project project3">
          <div className="projectpic">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Notepad_Win11.svg/800px-Notepad_Win11.svg.png" alt="notepad" className="notepad"/>
          </div>
          <div className="projectname">
            <p>Notepad</p>
          </div>
          <div className="projectbtns">
            <a href="https://github.com/Pushpa-Harshitha05/Mini_Notepad" target="_blank" rel="noopener noreferrer" className="btns">GitHub</a>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Projects;
