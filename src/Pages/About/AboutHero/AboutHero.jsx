import React, { useState } from 'react'
import image from '../../../assets/image1.png'
import linkedin from '../../../assets/linked.png'
import github from '../../../assets/github.png'
import download from '../../../assets/download.png'
import arrow from '../../../assets/arrow1.png'

const AboutHero = () => {
    const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
    
  return (
    <div className='w-full py-[1rem] px-[1rem] bg-black '>
        <div className='gap-[3rem] md:flex md:flex-col justify-center border-[#484848] md:px-[5rem] bg-black text-white'>
            <div className='md:flex grid justify-center border-[#484848]  md:gap-[7rem]'>
                <h1 className='md:text-[90px] text-[57px] md:w-[80rem] md:py-4'>ABOUT ME</h1>
                <div className='flex flex-col md:gap-[2rem] gap-[1rem] md:my-[2rem]'>
                    <h1 className='font-sans md:text-[32px] text-[24px] md:pr-[5rem]'>I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h1>
                    <p className='text-[16px] text-[#c7c7c7] font-extralight pr-[1rem] md:pr-[3rem]'>I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>

                    <div className='flex items-center gap-3 md:mb-0 md:mt-0 mt-[1rem] mb-[4rem]'>
                        <div>
                            <button className='button flex items-center'
                            onMouseEnter={handleHover} 
                            onMouseLeave={handleHover}
                            >DOWNLOAD RESUME <span className='border border-black bg-black ml-3 py-[.3rem] px-[.3rem] text-[.1rem] rounded-[3rem]'><img src={download} alt="" className='md:hidden block w-[.8rem]'/>
                            {isHovered && <img src={arrow} alt="" className='w-[.8rem] md:block hidden image' />}</span></button>
                        </div>
                        <div>
                            <img src={linkedin} alt="" className='w-[1.3rem]'/>
                        </div>
                        <div>
                            <img src={github} alt="" className='w-[1.3rem]'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full px-[2rem] border flex  justify-center items-center bg-[#C7C7C7] border-[#C7C7C7] rounded-lg'>
                <img src={image} alt="" className=''/>
            </div>
            <div className='md:flex py-[2rem] w-full '>
                <h1 className='md:text-[76px] text-[43px] md:w-[80rem]'>MY CAPABILITIES</h1>
                <div className='md:flex md:flex-col gap-4 py-5'>
                    <p>I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>

                    <div className='md:flex md:flex-col  md:gap-5 hidden '>
                        <div className='md:flex  md:gap-3'>
                            <button className='font-sans bg-transparent border rounded-2xl py-[.3rem] px-[2rem] border-[#484848]'>HTML</button>
                            <button className='font-sans bg-transparent border rounded-2xl py-[.3rem] px-[2rem] border-[#484848]'>CSS</button>
                            <button className='font-sans bg-transparent border rounded-2xl py-[.3rem] px-[2rem] border-[#484848]'>JAVASCRIPT</button>
                            <button className='font-sans bg-transparent border rounded-2xl py-[.3rem] px-[2rem] border-[#484848]'>JQUERY</button>
                        </div>
                        <div className='md:flex  md:gap-3'>
                            <button className='font-sans bg-transparent border rounded-2xl py-[.3rem] px-[2rem] border-[#484848]'>ACCESSIBILITY</button>
                            <button className='font-sans bg-transparent border rounded-2xl py-[.3rem] px-[2rem] border-[#484848]'>FIGMA</button>
                            <button className='font-sans bg-transparent border rounded-2xl py-[.3rem] px-[2rem] border-[#484848]'>TAILWIND CSS</button>
                        </div>
                    </div>
                    <div className='md:hidden block'>
                        <button className='font-sans bg-transparent border rounded-2xl py-[.3rem] px-[2rem] border-[#484848] mt-[1rem] mr-[.2rem] md:text-[16px] text-[14px]'>HTML</button>
                        <button className='font-sans bg-transparent border rounded-2xl py-[.3rem] px-[2rem] border-[#484848] mt-[1rem] mr-[.2rem] md:text-[16px] text-[14px]'>CSS</button>
                        <button className='font-sans bg-transparent border rounded-2xl py-[.3rem] px-[1.5rem] border-[#484848] mt-[1rem] mr-[.2rem] md:text-[16px] text-[14px]'>JAVASCRIPT</button>
                        <button className='font-sans bg-transparent border rounded-2xl py-[.3rem] px-[2rem] border-[#484848] mt-[1rem] mr-[.2rem] md:text-[16px] text-[14px]'>JQUERY</button>
                        <button className='font-sans bg-transparent border rounded-2xl py-[.3rem] px-[2rem] border-[#484848] mt-[1rem] mr-[.2rem] md:text-[16px] text-[14px]'>ACCESSIBILITY</button>
                        <button className='font-sans bg-transparent border rounded-2xl py-[.3rem] px-[2rem] border-[#484848] mt-[1rem] mr-[.2rem] md:text-[16px] text-[14px]'>FIGMA</button>
                        <button className='font-sans bg-transparent border rounded-2xl py-[.3rem] px-[2rem] border-[#484848] mt-[1rem]  mr-[.2rem] md:text-[16px] text-[14px]'>TAILWIND CSS</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutHero
