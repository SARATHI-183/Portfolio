import React from 'react'
import { skills } from "../../Data/Constant";

const Skills = () => {
  return (
    <div id='skills' className=' flex flex-col justify-center items-center relative z-[1]'>
        <div className='max-w-[1200px] relative flex flex-col justify-between  items-center w-full gap-[12px] '>
            <div className='font-semibold md:text-[42px] text-center md:mt-[12px] text-[#F2F3F4] text-[32px] mt-[12px]'>
                Skills</div>
            <div className='text-[12px] md:text-[18px] max-w-[600px] text-center mt-[12px] text-[#b1b2b3] px-4 '>
                Here are some of my skills on which I have been working on.
            </div>
            <div className='w-full flex flex-wrap justify-center mt-[30px] gap-[30px]'>
                {skills.map((item)=>(
                    <div className='md:w-full max-w-[300px]  md:max-w-[500px] border-[0.1px] border-solid rounded-[16px] border-[#854CE6] bg-[#171721] md:py-[18px] px-[36px] py-[10px] '>
                        <h2 className='text-[28px] font-semibold text-[#b1b2b3] mb-[20px] text-center'>
                            {item.title}</h2>
                        <div className='flex justify-center gap-[12px] flex-wrap mb-[20px]'>
                            {item.skills.map((skill)=>(
                                <div className='flex items-center md:text-[16px] justify-center gap-[8px] text-[#F2F3F4] border-[1px] border-solid border-[#F2F3F4] rounded-[12px] 
                                md:py-[12px] md:px-[16px] font-normal sm:text-[14px] sm:py-[8px] sm:px-[12px] text-[12px] py-[6px] px-[8px] '>
                                    <img className='w-[24px] h-[24px]' src={skill.image} />
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills