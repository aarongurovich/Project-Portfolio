
import React from 'react';
import ProjectCard from './ProjectCard';


const projects = [
  {
    title: 'Random Movie Generator',
    description: 'Can Generate Random movie based on certain filters such as genre, ratings, date published, etc..',
    link: 'https://movie-generator-app.pages.dev/',
    image: './assets/images/randommovie.PNG',
  },
  {
    title: 'Argumate AI',
    description: 'This web app records or uploads arguments/debates, scores each speaker, and picks a winner!',
    link: 'https://react-argument-gpt.pages.dev/',
    image: './assets/images/argue.PNG',
  },
  {
    title: 'Portfolio Website',
    description: 'Used Three.js to create dynamic cube. Links to github, linkedin, resume, and personal projects on website.',
    link: 'https://aarongurovich.com',
    image: './assets/images/portfol.PNG',
  },
  
 
];

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
