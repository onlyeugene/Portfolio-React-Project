import React from 'react'

const AboutExperience = () => {
  return (
    <div className='bg-black border-t-[1px] border-[#484848] md:px-[5rem] px-[1rem] py-[2rem] text-white'>
      <div className='md:flex'>
        <h1 className='md:text-[76px] text-[43px] md:w-[90rem]'>MY EXPERIENCE</h1>
        <div className='flex flex-col gap-[1rem] py-[1rem]'>
            <div className='md:flex justify-between items-center '>
                <h2 className='font-sans text-[24px]'>Freelance Developer</h2>
                <p className='text-[#c7c7c7] text-[18px]'>Nov 2023 - Present</p>
            </div>
            <div>
                <p className='text-[18px] text-[#c7c7c7]'>Teamed up with a group of professionals to make responsive websites.</p>
            </div>
            <div className='flex flex-col gap-2 py-[3rem]'>
                <div className='md:flex justify-between items-center '>
                    <h2 className='font-sans text-[24px]'>Front-End Intern</h2>
                    <p className='text-[#c7c7c7] text-[18px]'>Sep 2023 - Nov 2023</p>
                </div>
                <p className='text-[#d3e97a] text-[18px]'>Ross Tech</p>
                <div>
                    <p className='text-[18px] text-[#c7c7c7]'>I was given tasks to carry out and also had a section of most projects to build.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutExperience
