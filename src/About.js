import React from 'react';
import myPhoto from './Assets/pranav_photo.jpg';

const About = () => (
  <section className="about">
    <div className="container">
      <h2>About</h2>
      <div className="about-content">
        <img src={myPhoto} alt="Pranav Mahesh" className="about-photo" />
        <p>Hello, I'm Pranav Mahesh, a fourth-year Computer Science major, with a focus on cybersecurity at the University of Arkansas. 
           I am proficient in a variety of programming languages, including Python, C++, HTML, Java, JavaScript, and TypeScript. 
           Additionally, as an officer of CyberHogs, I actively participate in Capture The Flag competitions, such as hosting the Razorhack competition at the University of Arkansas.
           I am eager to delve deeper into the captivating field of cybersecurity, so let's connect and share insights.</p>
      </div>
    </div>
  </section>
);

export default About;
