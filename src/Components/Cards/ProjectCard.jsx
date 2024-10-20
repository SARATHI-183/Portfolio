import React from 'react'
import { FaLink } from "react-icons/fa";

const ProjectCard = ({project}) => {
        const handleCardClick = (githubLink) => {
          window.open(githubLink, '_blank');  // Opens the GitHub link in a new tab
        };


  return (
    <div className='w-[280px] h-[490px] bg-[#171721] cursor-pointer rounded-[10px] 
    shadow-[0px_0px_12px_4px_rgba(0,0,0,0.4)] overflow-hidden transition-all delay-200 
    ease-in-out hover:translate-y-[-10px] hover:shadow-[0px_0px_50px_4px_rgba(0,0,0,0.6)] 
    hover:brightness-110    flex flex-col px-[20px] py-[26px] gap-[14px] ' 
    onClick={()=> handleCardClick(project.github)}>
        <img src={project.image} className='w-full h-[180px] rounded-[10px] object-cover bg-[#FFFFFF] shadow-[0px_0px_16px_2px_rgba(0,0,0,0.3)]'></img>
        <div className='w-full flex flex-wrap mt-[4px] items-center gap-[8px] '>
            {project.tags.map((tag)=>(
                <span key={tag} className='text-[12px] font-normal text-[#854CE6] bg-[#854CE615] py-[2px] px-[8px] rounded-[10px]   '>{tag}</span>
            ))}
        </div>
        <div className='w-full flex flex-col py-0 px-[2px] gap-0'>
            {/* <div className='text-[20px] font-semibold text-[#b1b2b3] overflow-hidden text-ellipsis whitespace-nowrap max-w-full line-clamp-2 '> 
            default*/}
            <div className='text-[20px] font-semibold text-[#b1b2b3]  max-w-full line-clamp-2 '>
                {project.title}
            </div>

            <div className='text-[#b1b2b399] font-normal overflow-hidden text-ellipsis line-clamp-3 mt-[8px] max-w-full '>{project.description}</div>
            <div className='flex items-center group gap-2'>
                <FaLink   className='text-[#b1b2b399] font-normal w-[20px] h-[20px] items-center mt-[8px] group-hover:text-[#854CE6]' />
                <a className='text-[#b1b2b399]  font-normal overflow-hidden text-ellipsis line-clamp-1 mt-[8px] max-w-full group-hover:text-[#854CE6]' href={project.webapp || project.github} target='_blank'>
                    {project.webapp }
                </a>
           </div>
        </div>
        <div className='flex items-center pl-[10px]'></div>
    </div>
  )
}

export default ProjectCard