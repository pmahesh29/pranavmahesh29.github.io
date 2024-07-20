import React from 'react';
import myPhoto from './Assets/pranav_photo.jpg';
import './About.css';

const About = () => (
  <section className="about">
    <div className="container">
      <h2>About</h2>
      <div className="about-content">
        <img src={myPhoto} alt="Pranav Mahesh" className="about-photo" />
          <p>Hello, I'm Pranav Mahesh, a fourth-year Computer Science major at the University of Arkansas with a focus on Cybersecurity. I have a passion for technology and security, and I enjoy working on projects that challenge me to learn and grow.</p> 
          <p>My experience includes internships in data security and software development, where I've developed practical skills in various programming languages and tools. I'm also actively involved in fostering a community of like-minded individuals as the Vice-President of CyberHogs. </p>
          <p>When I'm not working, you can find me exploring outdoors, going to new coffee shops, or watching movies. I'm always looking for new opportunities to learn and grow, so feel free to reach out to me!</p>
      </div>
    </div>
  </section>
);

export default About;
