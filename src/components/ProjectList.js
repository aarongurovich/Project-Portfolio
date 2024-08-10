
import React from 'react';
import ProjectCard from './ProjectCard';


const projects = [
  {
    title: 'React Practice',
    description: 'Some fun projects I built with React to get more comfortable with it.',
    link: 'https://react-practice-f43.pages.dev/',
    image: './assets/images/reactpractice.PNG',
  },
  {
    title: 'Random Movie Generator',
    description: 'Can Generate Random movie based on certain filters such as genre, ratings, date published, etc..',
    link: 'https://movie-generator-app.pages.dev/',
    image: './assets/images/randommovie.PNG',
  },
  {
    title: 'Reddit Clone',
    description: 'Can search for posts and explore different topics across various communities.',
    link: 'https://reddit-client-5io.pages.dev/',
    image: './assets/images/redditclone.PNG',
  },
  {
    title: 'Portfolio Website',
    description: 'Used Three.js to create dynamic cube. Links to github, linkedin, and resume on website.',
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
