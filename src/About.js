import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link,  useNavigate } from 'react-router-dom';
import Contact from './Contact';
import './styling/App.css';
import profilePic from './assets/profile-pic.jpeg';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



function About(){

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const el = document.getElementById(location.hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);


    return (
        <>
        <div className="main-content">
          <h1 className="greeting">Hi, There!</h1>

          <div className="intro-section">
            <p className="greeting-paragraph">
              Hello! My name is Imani Gomez. I am a computer engineering graduate student at NYU.
              My background in computer engineering and film production allows me to use my skills
              in machine learning, full stack development, and digital media workflows to drive
              innovation in the entertainment industry. This gives me a unique perspective on how
              technology shapes the future of storytelling and I am constantly looking for new
              opportunities to learn and advance the industry forward.
              <br /><br />
              Additionally, I have a passion for the art form of photography. I have been shooting
              for 10 years and while I mostly focus on sports, I also love anything from portraits
              to fashion to street photography.
            </p>
            <img src={profilePic} alt="ProfilePic" className="profile" />
          </div>
        </div>

        <div className="work-content" id="work">
          <span className="work-title">MY WORK</span>

          <div className="work-block-pages">
            <Link to="/Photography" className="no-styling">
            <div className="work-block photography-block">
              <p className="PhotoText">Photography</p>
            </div>
            </Link>

            
              <Link to="/Tech" className="noStyling PhotoText">
              <div className="work-block software-block">
                <p className="PhotoText">Tech and Software</p>
                </div>
              </Link>
            

          <Link to="/Film" className="no-styling">
            <div className="work-block film-block" >
              <p className="PhotoText">Films</p>
            </div>
          </Link>
          
            
          </div>
        </div>

        <Contact />
        </>
    );
}

export default About;
