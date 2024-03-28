import React from 'react'
import { education } from '../../Data/Constant'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EducationCard from '../Cards/EducationCard';

const Experience = () => {
  return (
    <div id='education' className=' flex flex-col justify-center items-center relative z-[1]'>
        <div className='max-w-[1200px] relative flex flex-col justify-between  items-center w-full gap-[12px] '>
            <div className='font-semibold md:text-[42px] text-center md:mt-[12px] text-[#F2F3F4] text-[32px] mt-[12px]'>
                Education</div>
            <div className='text-[12px] md:text-[18px] max-w-[600px] text-center mt-[12px] text-[#b1b2b3] p-2'>
                My education has been a journey self discovery and growth. My education details are as follows.
            </div>
            <div className='w-full max-w-[1000px] mt-[10px] flex flex-col items-center justify-center gap-[12px]   '>
              <Timeline>
                {education.map((education,index)=>(
                  <TimelineItem>
                  <TimelineContent sx={{py:"12px", px:2 }}>
                    <EducationCard education={education} />
                  </TimelineContent>
                  <TimelineSeparator>
                    <TimelineDot variant='outlined' color='secondary' />
                    {
                      index!== education.length - 1 && <TimelineConnector />
                    }
                  </TimelineSeparator>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
        </div>
    </div>
        
  )
}

export default Experience