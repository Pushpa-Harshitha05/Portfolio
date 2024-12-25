import React from 'react';
import './profiles.css';
import './script.js';

const Profiles = () => {

  return (
    <section id="profiles">
      <div className="profilestitle">
        Profiles
      </div>
      <div className="container">
        <div className="slider">
          <div className="slide">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            <input type="radio" name="radio-btn" id="radio5" />
            <input type="radio" name="radio-btn" id="radio6" />

            <div className="st first">
              <p>Leetcode</p>
            </div>
            <div className="st">
              <p>Codechef</p>
            </div>
            <div className="st">
              <p>GeeksForGeeks</p>
            </div>
            <div className="st">
              <p>HackerEarth</p>
            </div>
            <div className="st">
              <p>HackerRank</p>
            </div>
            <div className="st">
              <p>CodeForces</p>
            </div>

            <div className="nav-auto">
              <div className="a-b1"></div>
              <div className="a-b2"></div>
              <div className="a-b3"></div>
              <div className="a-b4"></div>
              <div className="a-b5"></div>
              <div className="a-b6"></div>
            </div>
          </div>

          <div className="nav-m">
            <label htmlFor="radio1" className="m-btn"></label>
            <label htmlFor="radio2" className="m-btn"></label>
            <label htmlFor="radio3" className="m-btn"></label>
            <label htmlFor="radio4" className="m-btn"></label>
            <label htmlFor="radio5" className="m-btn"></label>
            <label htmlFor="radio6" className="m-btn"></label>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Profiles;
