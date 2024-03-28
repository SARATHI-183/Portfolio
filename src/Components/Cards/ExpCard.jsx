{experience.desc}
{experience.skills &&(
  <>
    <br/>
    <div className='w-full flex gap-[12px] mt-[10px]'>
      <b >Skills:</b>
      <div className='flex flex-wrap gap-[8px] items-center'>
        {experience.skills.map((skill)=>(
          <div className='text-[12px] md:[15px] font-light text-[#F2F3F499]'>&#8226; {skill}</div>
        ))}
      </div>
    </div>
  </>
)}



{experience.doc &&
    <a href={experience.doc} target='new'>
      <img src={experience.doc} 
      className='h-[70px] w-fit bg-[#000] rounded-[10px] hover:cursor-pointer hover:opacity-80  group-hover:block group-hover:transition-all 
      group-hover:delay-300 group-hover:ease-in-out   hidden'/>  
    </a>}