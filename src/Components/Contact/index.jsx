import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Contact = () => {
    const [open, setOpen] = React.useState(false)
    const form = useRef()
    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_ckea4sx','template_zg7lkah',form.current,'NRW-GdMoRQDr4e-Y1')
        .then((result)=>{
            setOpen(true)
            form.current.reset()
        }, (error) =>{
            console.log(error.text)
        })
    }

  return (
    <div id='contact' className='p-0 flex flex-col justify-center relative z-[1] items-center'>
        <div className='relative flex justify-center items-center flex-col w-full max-w-[1350px] gap-[12px] pb-[80px]'>
            <div className='text-[12px] md:text-[42px] text-center font-semibold mt-[32px] md:mt-[20px] text-[#F2F3F4]'>Contact</div>
            <div className='text-[16px] md:text-[18px] mt-[12px] md:mt-0 text-center max-w-[600px] text-[#b1b2b3] '>Feel free to reach out to me </div>
            <form ref={form} onSubmit={handleSubmit}
            className='w-[95%] max-w-[600px] flex flex-col bg-[#171721] p-[32px] rounded-[16px] mt-[28px] gap-[12px] shadow-[_rgba(23,92,230,0.15)_0px_4px_24px]'> 
                <div className='text-[24px] mb-[6px] font-semibold text-[#F2F3F4]'>Email Me</div>
                <input type='email' placeholder='Your Email' name='from_email' className='flex-1 bg-transparent outline-none text-[18px] text-[#F2F3F4] rounded-[12px] py-[12px] px-[16px] border-[1px] border-solid border-[#b1b2b3] focus:border-[1px] focus:solid focus:border-[#F2F3F4]' />
                <input type='text' placeholder='Your Name' name='from_name' className='flex-1 bg-transparent outline-none text-[18px] text-[#F2F3F4] rounded-[12px] py-[12px] px-[16px] border-[1px] border-solid border-[#b1b2b3] focus:border-[1px] focus:solid focus:border-[#F2F3F4]' />
                <input type='text' placeholder='Subject' name='subject' className='flex-1 bg-transparent outline-none text-[18px] text-[#F2F3F4] rounded-[12px] py-[12px] px-[16px] border-[1px] border-solid border-[#b1b2b3] focus:border-[1px] focus:solid focus:border-[#F2F3F4]' />
                <textarea type='text' placeholder='Message' rows='4' name='message' className='flex-1 bg-transparent outline-none text-[18px] text-[#F2F3F4] rounded-[12px] py-[12px] px-[16px] border-[1px] border-solid border-[#b1b2b3] focus:border-[1px] focus:solid focus:border-[#F2F3F4]' />
                <input type='submit' value="Send" className='w-full no-underline bg-custom-gradient from-start to-end py-[13px] px-[16px] mt-[2px] rounded-[12px] border-none text-[#F2F3F4] text-[18px] font-semibold' />
            </form>
            <Snackbar 
                open={open}
                autoHideDuration={6000}
                onClose={()=>setOpen(false)}
                message="Email sent successfully!"
                severity="success"
            />
        </div>
    </div>
  )
}

export default Contact