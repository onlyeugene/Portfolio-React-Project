import React from 'react';

const ProjectComponent = ({ name, description, techStack, challenges, outcomes }) => {
  return (
    <div className="project">
      <h2 className='font-sans md:text-[28px] text-[20px] pb-3 text-[#c7c7c7]'>{name}</h2>
      <p className='pb-3 md:text-[20px] text-[18px]'>Description: <span className='font-sans md:text-[18px] text-[#c7c7c7]'>{description}</span></p>
      <p className='pb-3 md:text-[20px] text-[18px]'>Technology Stack: <span className='font-sans md:text-[18px] text-[#c7c7c7]'>{techStack}</span></p>
      <p className='pb-3 md:text-[20px] text-[18px]'>Challenges Faced: <span className='font-sans md:text-[18px] text-[#c7c7c7]'>{challenges}</span></p>
      <p className='pb-3 md:text-[20px] text-[18px]'>Outcomes Achieved: <span className='font-sans md:text-[18px] text-[#c7c7c7]'>{outcomes}</span></p>
    </div>
  );
};

export default ProjectComponent;

