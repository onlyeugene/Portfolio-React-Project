import React from 'react'
// import { projects } from './HomeProjectsDb'
// import HomeProjectsCard from './HomeProjectsCard'
import image1 from '../.././../assets/work.png'
import image2 from '../.././../assets/image 9.png'
import image3 from '../.././../assets/image 10.png'
import image4 from '../.././../assets/image 24.png'
import arrow from '../.././../assets/arrow.png'
import github from '../.././../assets/github.png'

const HomeProjects = () => {
  return (
    <div className='bg-black text-white border-t-[1px] border-[#484848] py-[3rem] w-full flex flex-col justify-center'>
      <div className=''>
        <div className='md:px-[5rem] px-[1rem] md:py-[2rem]'>
            <h1 className='md:text-[76px] text-[43px]'>FEATURED PROJECTS</h1>
            <p className='md:text-[18px] text-[#c7c7c7]'>Here are some of the selected projects that showcase my passion for <br />front-end development.</p>
        </div>
      </div>
      {/* <div className='flex flex-col gap-[5rem]'>
        {projects.map((projects) =>
        <HomeProjectsCard
        key={projects.id}
        button = {projects.button}
        image= {projects.image}
        header = {projects.header}
        content = {projects.content}
        />
        )}
      </div> */}

      <div className='flex flex-col md:gap-[4rem]'>

      {/* PROMOTIONAL LANDING PAGE  */}

        <div className='md:flex justify-center items-center px-[1rem] md:pt-0 pt-[2rem] md:px-[5rem] grid gap-[2rem] md:gap-[5rem]'>
          <div className='border md:px-[2rem] px-[1rem] md:py-[7rem] py-[1rem] rounded-md relative border-[#1a1a1a] bg-[#1a1a1a]'>
            <button className='font-sans border absolute top-2 left-3 border-black bg-black rounded-2xl px-[.5rem] py-[.3rem] text-[14px]'>Conceptual work</button>
            <img src={image1} alt="" className='w-[80rem] md:block hidden'/>
            <img src={image4} alt="" className='w-[80rem] md:hidden block'/>
          </div>
          <div>
            <h1 className='md:text-[32px] text-[24px] font-sans'>Promotional landing page for our favorite show</h1>
            <p className='md:text-[18px] text-[#c7c7c7] '>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
            <p className='font-medium border-b-[1px] py-3 border-[#606060]'>PROJECT INFO</p>
            <p className='font-medium border-b-[1px] py-3 border-[#606060] flex justify-between'>Year <span className='font-sans text-[#d0d0d0] font-extralight'>2023</span></p>
            <p className='font-medium border-b-[1px] py-3 border-[#606060] flex justify-between'>Role<span className='font-sans text-[#d0d0d0] font-extralight'>Front-end Developer</span></p>
            <div className='flex gap-4'>
              <div className='flex items-center gap-2 border-b-[1px] my-[3rem] py-1 md:w-[6.5rem] w-[5.8rem] border-[#d3e97a]'>
                <p className='text-[#D3E97A] text-[14px] md:text-[16px]'>LIVE DEMO</p>
                <div>
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className='flex items-center gap-2 border-b-[1px] my-[3rem] py-1 md:w-[9.1rem] w-[8.4rem] border-[#d3e97a]'>
                <p className='text-[#D3E97A] text-[14px] md:text-[16px]'>SEE ON GITHUB</p>
                <div>
                  <img src={github} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* BLOG SITE FOR WORLD NEWS  */}

        <div className='md:flex justify-center items-center px-[1rem] md:pt-0 pt-[2rem] md:px-[5rem] grid gap-[2rem] md:gap-[5rem]'>
          <div className='border md:px-[2rem] px-[1rem] md:py-[7rem] py-[1rem] rounded-md relative border-[#1a1a1a] bg-[#1a1a1a]'>
            
            <img src={image3} alt="" className='w-[64rem]'/>
          </div>
          <div>
            <h1 className='md:text-[32px] text-[24px] font-sans'>Blog site for World News</h1>
            <p className='md:text-[18px] text-[#c7c7c7] '>Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.</p>
            <p className='font-medium border-b-[1px] py-3 border-[#606060]'>PROJECT INFO</p>
            <p className='font-medium border-b-[1px] py-3 border-[#606060] flex justify-between'>Client<span className='font-sans text-[#d0d0d0] font-extralight'>World News</span></p>
            <p className='font-medium border-b-[1px] py-3 border-[#606060] flex justify-between'>Year <span className='font-sans text-[#d0d0d0] font-extralight'>2022</span></p>
            <p className='font-medium border-b-[1px] py-3 border-[#606060] flex justify-between'>Role<span className='font-sans text-[#d0d0d0] font-extralight'>Front-end Developer</span></p>
            <div className='flex gap-4'>
              <div className='flex items-center gap-2 border-b-[1px] my-[3rem] py-1 md:w-[8.3rem] w-[7.5rem] border-[#d3e97a]'>
                <p className='text-[#D3E97A] text-[14px] md:text-[16px]'>VIEW PROJECT</p>
                <div>
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* E-COMMERCE PRODUCT PAGE  */}

        <div className='md:flex justify-center items-center px-[1rem] md:pt-0 pt-[2rem] md:px-[5rem] grid gap-[2rem] md:gap-[5rem]'>
          <div className='border px-[2rem] md:py-[7rem] py-[4rem]  rounded-md relative border-[#1a1a1a] bg-[#1a1a1a]'>
            <button className='font-sans border absolute top-2 left-3 border-black bg-black rounded-2xl px-[.5rem] py-[.3rem] text-[14px]'>Challenge</button>
            <img src={image2} alt="" className='w-[49rem]'/>
          </div>
          <div>
            <h1 className='md:text-[32px] text-[27px] font-sans'>E-commerce product page</h1>
            <p className='md:text-[18px] text-[#c7c7c7] '>Sucessfully crafted an engaging product pzge featuring a dynamic lightbox and seamless cart functionality. showcasing proficiency in Javascript development.</p>
            <p className='font-medium border-b-[1px] py-3 border-[#606060]'>PROJECT INFO</p>
            <p className='font-medium border-b-[1px] py-3 border-[#606060] flex justify-between'>Year <span className='font-sans text-[#d0d0d0] font-extralight'>2022</span></p>
            <p className='font-medium border-b-[1px] py-3 border-[#606060] flex justify-between'>Role<span className='font-sans text-[#d0d0d0] font-extralight'>Front-end Developer</span></p>
            <div className='flex gap-4'>
              <div className='flex items-center gap-2 border-b-[1px] my-[3rem] py-1 md:w-[6.5rem] w-[5.8rem] border-[#d3e97a]'>
                <p className='text-[#D3E97A] text-[14px] md:text-[16px]'>LIVE DEMO</p>
                <div>
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className='flex items-center gap-2 border-b-[1px] my-[3rem] py-1 md:w-[9.1rem] w-[8.3rem] border-[#d3e97a]'>
                <p className='text-[#D3E97A] text-[14px] md:text-[16px]'>SEE ON GITHUB</p>
                <div>
                  <img src={github} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>


    </div>
  )
}

export default HomeProjects
