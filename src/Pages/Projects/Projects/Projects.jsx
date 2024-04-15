// LandingPage.js
import React from 'react';
import ProjectComponent  from './ProjectExchange';

const Projects = () => {
  const projects = [
    {
      name: 'Exchange Website',
      description: 'One Exchange is a comprehensive online exchange platform designed to facilitate the buying, selling, and trading of various digital assets, including cryptocurrencies, stocks, and commodities. With an intuitive user interface and robust backend infrastructure, One Exchange offers a seamless trading experience for both novice and experienced traders alike.',
      techStack: 'React',
      challenges: 'Managing real-time data updates efficiently ',
      outcomes: 'I created a highly responsive and interactive user interface, enhancing the overall trading experience. ',
    }
  ];

  return (
    <div className="w-full md:px-[5rem] px-[1rem] bg-black text-white">
      <h1 className='md:text-[72px] text-[38px] md:w-full '>Welcome to My Portfolio</h1>
      <h2 className='md:text-[34px] text-[24px] font-sans'>Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectComponent key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
