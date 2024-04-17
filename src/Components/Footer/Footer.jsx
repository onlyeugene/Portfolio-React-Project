import React from 'react'
import linked from '../../assets/linked.png'
import github from '../../assets/github.png'
import x from '../../assets/x.png'
import insta from '../../assets/insta.png'

const Footer = () => {
  return (
    <div className='bg-black text-white border-t-[1px] w-full border-[#484848] md:px-[5rem] lg:flex px-[1rem]  py-[2rem] xl:flex gap-[10rem] lg:gap-0 justify-center xl:px-0' id='contact'>
      <div className='xl:w-full xl:pl-[5rem]'>
        <h1 className='md:text-[76px]  text-[34px] pr-[10rem]'>LET'S CONNECT</h1>
        <p className='md:text-[18px] font-extralight text-[#c7c7c7] mb-1'>Say hello at <span className='text-white border-b-[1px] font-sans border-[#d3e97a]'>robertgarcia@gmail.com</span></p>
        <p className='md:text-[18px] font-extralight text-[#c7c7c7]'>For more info, here's my <span className='text-white border-b-[1px] font-sans border-[#d3e97a]'>resume</span></p>
        <div className='flex items-center gap-[1rem] pt-5 md:pb-0 pb-[1rem]'>
            <img src={linked} alt="" className='w-[1.2rem]'/>
            <img src={github} alt="" className='w-[1.2rem]'/>
            <img src={x} alt="" className='w-[1.2rem]'/>
            <img src={insta} alt="" className='w-[1.2rem]'/>
        </div>
        <p className='text-[#c7c7c7] xl:mt-[15rem] lg:mt-[10rem] xl:block lg:block hidden'>&copy; 2023 onlyeugene</p>
      </div>

      <div className='pr-[1rem]'>
        <form action="">
            <div className='flex flex-col pt-[1.5rem] py-[.3rem] gap-2'>
                <label className='font-sans text-[#c7c7c7]' htmlFor="Name">Name</label>
                <input className='bg-[#1a1a1a] border outline-none rounded-sm py-[.6rem] px-[1rem]  lg:pr-[24rem]  xl:pr-[50rem]  md:pr-[5rem] border-[#1a1a1a]' type="text" />
            </div>
            <div className='flex flex-col py-[.3rem] gap-2'>
                <label className='font-sans text-[#c7c7c7]' htmlFor="Email">Email</label>
                <input className='bg-[#1a1a1a] border outline-none rounded-sm py-[.6rem] px-[1rem]  lg:pr-[24rem] xl:pr-[50rem]  md:pr-[5rem] border-[#1a1a1a]' type="text" />
            </div>
            <div className='flex flex-col py-[.3rem] gap-2'>
                <label className='font-sans text-[#c7c7c7]' htmlFor="Subject">Subject</label>
                <input className='bg-[#1a1a1a] border outline-none rounded-sm py-[.6rem] px-[1rem]  lg:pr-[24rem] xl:pr-[50rem]  md:pr-[5rem] border-[#1a1a1a]' type="text" />
            </div>
            <div className='flex flex-col py-[1.5rem] gap-2'>
                <label className='font-sans text-[#c7c7c7]' htmlFor="Message">Message</label>
                <textarea className='bg-[#1a1a1a] border resize-none outline-none rounded-sm py-[rem] px-[1rem] xl:pr-[50rem] lg:pr-[24rem] pr-[5rem] border-[#1a1a1a]' name="" id="" cols="10" rows="5"></textarea>
            </div>
            <div>
                <input className='button px-[2rem] py-2 uppercase' type="Submit" placeholder='SUBMIT' />
            </div>
        </form>
        <p className='text-[#c7c7c7] mt-[2rem] xl:hidden lg:hidden block'>&copy; 2023 onlyeugene</p>
      </div>
    </div>
  )
}

export default Footer
