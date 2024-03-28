import React from 'react'

const ExperienceCard = ({education}) => {
  return (
    <div className='group md:w-[650px] w-[230px] rounded-[10px] shadow-[_0px_0px_10px_rgba(0,0,0,0.1)] hover:shadow-[_0px_20px_10px_rgba(0,0,0,0.1)] 
    md:py-[12px] md:px-[16px] p-[10px] justify-between flex relative overflow-hidden flex-col gap-[8px] md:gap-3 transition-all delay-300 ease-in-out 
    hover:translate-y-[-5px] border-[0.1px] border-solid border-[#306ee8] shadow-[_0px_4px_24px_rgba(23,92,230,0.15)]'>
        <div className='flex gap-4 w-full'>
            <img className='h-[50px] lg:h-[50px] bg-[#000] rounded-[10px] mt-[4px] ' 
            src={education.img}></img>
            <div className='flex flex-col w-full'>
                <div className='text-[14px] md:text-[18px] font-semibold text-[#F2F3F499]'>{education.school}</div>
                <div className='text-[12px] md:text-[14px] font-medium text-[#F2F3F499]'>{education.degree}</div>
                <div className='text-[10px] md:text-[12px] font-normal text-[#F2F3F480]'>{education.date}</div>
            </div>
        </div>
        <div className='text-[12px] md:text-[14px] font-medium text-[#b1b2b399]'><b>Grade : </b>{education.grade}</div>
        <div className='w-full text-[12px] md:text-[15px] font-light text-[#b1b2b399] mb-[10px] '>
          <span className='line-clamp-4  max-w-full text-ellipsis group-hover:overflow-visible group-hover:line-clamp-none group-hover:delay-300 group-hover:transition-all group-hover:ease-in-out '>
            {education.desc}
          </span>
        </div> 
        
    </div>
  )
}

export default ExperienceCard