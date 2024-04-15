import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black text-white w-full md:px-[3rem] flex items-center justify-between md:p-[2rem] p-[1rem]'>
      <div>
        <Link to={'/'}>
          <h1 className='md:text-[32px] text-[28px] text-[#c7c7c7]'>ROBERT GARCIA</h1>
        </Link>
      </div>
      <nav>
        <ul className='md:flex gap-[2rem] font-extralight hidden'>
            <li>Work</li>
            <Link to={'/about'}>
              <li>About</li>
            </Link>
            <li>Contact</li>
        </ul>
        <div className='md:hidden flex flex-col gap-[.5rem]'>
          <div className='border w-[2rem] border-[#c7c7c7]'></div>
          <div className='border w-[2rem] border-[#c7c7c7]'></div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
