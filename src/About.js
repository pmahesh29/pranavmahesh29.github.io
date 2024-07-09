import React from 'react';
import myPhoto from './Assets/pranav_photo.jpg';
import './About.css';

const About = () => (
  <section className="about">
    <div className="container">
      <h2>About</h2>
      <div className="about-content">
        <img src={myPhoto} alt="Pranav Mahesh" className="about-photo" />
        <p>Hello, I'm Pranav Mahesh, a fourth-year Computer Science major, with a focus on cybersecurity at the University of Arkansas.  
          <br></br> Welcome to my Portfolio.</p>
      </div>
    </div>
  </section>
);

export default About;
