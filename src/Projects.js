import React from 'react';
import './index.css'; 
import photon from './Assets/Photon.jpg';

const projects = [
  {
    title: 'Project Photon',
    description: 'Created a Photon Laser Tag System for a Software Engineering course at the University of Arkansas.',
    image: photon,
    link: 'https://github.com/team-15-csce3513/photon'
  },
  {
    title: 'Project Two',
    description: 'This is a description of project two. It focuses on implementing feature A with tool B.',
    link: 'https://example.com/project-two'
  },
  {
    title: 'Project Three',
    description: 'This is a description of project three. It demonstrates how to achieve result Z using framework C.',
    link: 'https://example.com/project-three'
  }
];

const Projects = () => (
  <div className="Projects">
    <h2>Projects</h2>
    <div className="projects">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.image ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
            </a>
          ) : (
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
