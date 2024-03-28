import React from 'react'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../Data/Constant'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col justify-center items-center relative z-[1] mt-10 '>
        {/* clip-path-polygon-[0_0,_100%_0,_100%_100%,_100%_98%,_0_100%] bg-gradient-to-tl from-[rgba(132,59,206,0.06)_5.71%] to-[rgba(132,59,206,0)_64.83% ] */}
        <div className='max-w-[1200px] relative flex flex-col justify-between  items-center w-full gap-[12px] pt-[10px] pb-[100px] px-0 '>
            <div className='font-semibold md:text-[42px] text-center md:mt-[12px] text-[#F2F3F4] text-[32px] mt-[12px]'>
                Projects</div>
            <div className='text-[12px] md:text-[18px] max-w-[600px] text-center mt-[12px] text-[#b1b2b3] mb-3 p-1 '>
                I have worked on a few projects.Here are some of my projects.
            </div>
            <div className='flex justify-center items-center gap-[20px] flex-wrap'>
                {projects.map((project)=> <ProjectCard  project={project}/>)}
                
            </div>
        </div>
    </div>
  )
}

export default Projects