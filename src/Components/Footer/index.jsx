import React from 'react'
import { Bio } from '../../Data/Constant'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className='w-full py-[2rem] px-0 flex justify-center '>
        <div className='w-full max-w-[1200px] flex flex-col gap-[14px] items-center p-[1rem] text-[#F2F3F4]'>
          {/* <h1 className='font-semibold text-[20px] text-[#854CE6]'>Logo</h1> */}
          <nav className='md:w-full md:max-w-[800px] md:mt-[0.5rem] md:flex md:flex-row md:gap-[2rem] md:justify-center flex flex-wrap gap-[1rem] justify-center text-center text-[12px]'>
            <a href="#about" className='text-[#F2F3F4] md:text-[1.2rem] text-[1rem] hover:text-[#854CE6] transition-all delay-200 ease-in-out'>About</a>
            <a href="#skills" className='text-[#F2F3F4] md:text-[1.2rem] text-[1rem] hover:text-[#854CE6] transition-all delay-200 ease-in-out'>Skills</a>
            <a href="#projects" className='text-[#F2F3F4] md:text-[1.2rem] text-[1rem] hover:text-[#854CE6] transition-all delay-200 ease-in-out'>Project</a>
            <a href="#education" className='text-[#F2F3F4] md:text-[1.2rem] text-[1rem] hover:text-[#854CE6] transition-all delay-200 ease-in-out'>Education</a>
          </nav>
          <div className='flex mt-[1rem]'>
            <a href={Bio.linkedin} target='display' className='inline-block text-[1.5rem] text-[#F2F3F4] transition-all delay-200 ease-in-out hover:text-[#854CE6] mx-[1rem]'><LinkedInIcon /></a>
            <a href={Bio.insta} target='display' className='inline-block text-[1.5rem] text-[#F2F3F4] transition-all delay-200 ease-in-out hover:text-[#854CE6] mx-[1rem]'><InstagramIcon /></a>
            <a href={Bio.github} target='display' className='inline-block text-[1.5rem] text-[#F2F3F4] transition-all delay-200 ease-in-out hover:text-[#854CE6] mx-[1rem]'><GitHubIcon/></a>
          </div>
          <p className='mt-[1.5rem] text-[0.9rem] text-center text-[#F2F3F4]'>
            &copy; 2024 Sarathi. All rights reserved.
          </p>
        </div>
    </div>
  )
}

export default Footer