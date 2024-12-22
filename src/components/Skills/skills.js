import React from 'react'
import './skills.css'
import html from '../../assests/html.png';
import css from '../../assests/css.png';
import javascript from '../../assests/javascript.webp';
import tailwind_css from '../../assests/tailwind_css.png';
import c_lang from '../../assests/c_lang.png';
import cpp from '../../assests/cpp.png';
import react from '../../assests/react.png';
import django from '../../assests/django.svg';
import python from '../../assests/python.png';
import git from '../../assests/git.png';
import mysql from '../../assests/mysql.png'


const Skills = () => {
  return (
    <section className='skills'>
      <div className='skillstitle'>
        My Skills
      </div>
      <div className='firstrow'>
        <div className="webskills">
          <img src={html} alt="html" className='html'/>
          <p>HTML</p>
        </div>
        <div className="webskills css">
          <img src={css} alt="css" className='css_img'/>
          <p>CSS</p>
        </div>
        <div className="webskills">
          <img src={javascript} alt="javascript" className='js'/>
          <p>Javascript</p>
        </div>
        <div className="webskills tailwind_css">
          <img src={tailwind_css} alt="tailwind_css" className='tailwind'/>
          <p>Tailwind CSS</p>
        </div>
      </div>
      <div className='secondrow'>
        <div className="webskills">
          <img src={react} alt="react" className='react'/>
          <p>React</p>
        </div>
        <div className="webskills">
          <img src={cpp} alt="C language" className='c_lang'/>
          <p>C++</p>
        </div>
        <div className="webskills css">
          <img src={python} alt="cpp" className='cpp_lang'/>
          <p>Python</p>
        </div>
      </div>
      <div className="thirdrow">
        <div className="webskills">
          <img src={django} alt="django" className='django'/>
          <p>Django</p>
        </div>
        <div className="webskills css">
          <img src={mysql} alt="mysql" className='mysql'/>
          <p>MySQL</p>
        </div>
        <div className="webskills">
          <img src={git} alt="git" className='git'/>
          <p>Git</p>
        </div>
        <div className="webskills c_language">
          <img src={c_lang} alt="c_lang" className='c_lang'/>
          <p>C Language</p>
        </div>
      </div>
    </section>
  )
}

export default Skills;
