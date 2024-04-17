import React, { useState } from 'react'
import linkedin from '../../../assets/linked.png'
import github from '../../../assets/github.png'
import image from '../../../assets/image.png'
import arrow from '../../../assets/arrow1.png'

const HomeHero = () => {
    const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className='md:flex grid  bg-black text-white justify-center md:px-[5rem] py-[2rem] px-[1rem] items-center gap-[3rem]'>
        <div className=''>
            <h1 className='md:text-[90px] text-[57px] leading-[3.5rem] md:leading-[6rem] mb-3'>Hi, i am <br /> Robert Garcia.</h1>
            <p className='mb-5 font-extralight text-[#c7c7c7] text-[16px] md:text-[18px]'>A Sydney based front-end developer passionate about building accessible and user friendly websites</p>
            <div className='flex items-center gap-[1rem]'>
                <a href="#contact">
                    <div >
                        <button className='button flex items-center'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}>CONTACT ME <span className='border border-black bg-black ml-3 py-[.3rem] px-[.3rem] text-[.1rem] rounded-[3rem]'>
                        {isHovered && <img src={arrow} alt="" className='md:block hidden image'/>}
                        <img src={arrow} alt="" className='md:hidden block'/>
                        </span>
                        </button>
                    </div>
                </a>
                <div>
                    <img src={linkedin} alt="" className='w-[1.3rem]'/>
                </div>
                <div>
                    <img src={github} alt="" className='w-[1.3rem]'/>
                </div>
            </div>
        </div>
        <div>
            <img src={image} alt="" className='mb-[4rem] w-full'/>
        </div>
    </div>
  )
}

export default HomeHero
