import React from 'react'
import image from '../../../assets/image 25.png'
import { Link } from 'react-router-dom'


const HomeAbout = () => {
  return (
    <div className='w-full border-t-[1px] gap-[9.4rem] md:flex justify-center border-[#484848] md:px-[5rem] px-[1rem] py-[1rem] md:py-[5rem] bg-black text-white'>
        <h1 className='text-[90px] w-full py-4 md:block hidden'>ABOUT ME</h1>
      <div className='my-[2rem]'>
        <h1 className='font-sans text-[32px] md:block hidden'>I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h1>
        <p className='text-[16px] text-[#c7c7c7] font-extralight '>I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>

        <Link to={'/About'}>
          <p className='text-[#d3e97a] border-b-[1px] border-[#d3e97a] my-[2rem] w-[8rem]'>MORE ABOUT ME</p>
        </Link>
        <img src={image} alt="" className='block md:hidden'/>
      </div>
    </div>
  )
}

export default HomeAbout
