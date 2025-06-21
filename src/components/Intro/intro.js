import React from 'react'
import './intro.css'
import {useState,useEffect} from "react";
import video from '../../assests/profile.png'

const Intro = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const toRotate = ["Web Developer", "Passionate Programmer"];
  const typingSpeed = 130;
  const deletingSpeed = 70;
  const pauseTime = 1200;

  useEffect(() => {
    const ticker = setTimeout(() => tick(), isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    if (isDeleting) {
      setText((prev) => prev.slice(0, -1));
      if (text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    } else {
      setText((prev) => fullText.slice(0, prev.length + 1));
      if (text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
    }
  };

  return (
    <section id="intro">
      <div className="sectioncontent">
        <span className="hello">Hello,</span>
        <span className="introtext">I'm <span className="introname">Pushpa Harshitha</span></span>
        <div className="titles">
          <span className="changetitle">{text}</span>
          <div className="tick"></div>
        </div>
        <div className="introbtn">
          <a href="mailto:pharshitha2005@gmail.com" target="_blank" rel="noopener noreferrer" className="hireme">Hire me</a>
          <a href="/pushpa_harshitha_resume.pdf" target="_blank" rel="noopener noreferrer" className="resume">Resume</a>
        </div>
      </div>
      <img src={video} alt="profile" className='profilepic'/>
    </section>
  )
}

export default Intro;
