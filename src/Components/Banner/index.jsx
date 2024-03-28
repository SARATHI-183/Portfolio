import React from 'react'
import { Bio } from '../../Data/Constant'
import Typewriter from 'typewriter-effect'


const Banner = () => {
  return (
    <div id='about'>
      <div className='flex justify-center py-[66px] px-[16px] md:relative md:py-[80px] md:px-[30px] z-[1] text-white'>
         {/* <div className='absolute flex justify-center top-0 right-0 bottom-0 left-0 w-full h-full max-w-[1360px] overflow-hidden p-y-0 p-x-[30px] 
        md:justify-center md:p-x-0 md:p-y-0'></div>  */}
        <div className='relative md:flex-row  justify-around md:justify-between sm:items-center w-full sm:max-w-[1100px] flex flex-col    '>
          <div className='w-full mb-[30px] flex-col order-2 md:order-1 items-center md:items-start'>
            <div className='font-bold md:text-[50px] md:text-left md:leading-[68px] text-center text-[40px] mb-[8px] leading-[48px] ' >
              Hi, I am <br />
              {Bio.name}
            </div>
            <div className='font-semibold md:text-[32px] gap-3 md:leading-[68px] md:justify-start text-[22px] justify-center
             leading-[48px] flex mb-4 md:mb-0' >
              I am a
              <span className='cursor-pointer text-[#854CE6] '>
                <Typewriter 
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span> 
            </div>
            <div className='text-[16px] leading-[32px] mb-[42px] text-center justify-center md:justify-start md:text-left md:text-[20px] 
            md:leading-[32px] text-[#b1b2b3]'>{Bio.description}</div>
            <a className=' flex justify-center items-center m-auto md:m-0 text-[20px] font-semibold cursor-pointer   rounded-[30px] 
            text-center p-2 w-[95%] max-w-[300px] 
              bg-[#854CE6] shadow-xl transition-all duration-200 ease-in-out glow ' href={Bio.resume} target="_blank">Check Resume</a>
          </div>
          <div className='w-full flex order-1 justify-center gap-[12px] mb-[30px] items-center md:justify-items-end md:order-2
           md:items-center md:mb-[80px]'>
            {/* <img  src='../../Images/about.png' className='relative w-full h-full md:max-w-[400px] md:max-h-[400px] max-w-[280px] max-h-[280px] rounded-[50%]
             border-2 border-solid border-[#854CE6] img_glow' alt="" /> */}
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Banner