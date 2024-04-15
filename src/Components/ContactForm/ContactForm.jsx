import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-[90vw] md:w-[45vw] flex flex-col justify-center items-start gap-5 '>
        <input type="text" placeholder='Your Name' className='w-full p-4 placeholder:text-pink rounded-full border border-pink'/>
        <input type="email" placeholder='Your Email' className='w-full p-4 placeholder:text-pink rounded-full border border-pink'/>
        <input type="text" placeholder='Subject'className='w-full p-4 placeholder:text-pink rounded-full border border-pink'/>
        <textarea  placeholder='Your Message'className='w-full p-4 placeholder:text-pink h-[200px] rounded-2xl border border-pink'/>
        <button className='flex h-11 w-36 rounded-full  items-center gap-2 justify-center 
    bg-gradient-to-l from-pink to-purple hover:transition-all text-white hover:scale-105 hover:duration-500 transition-colors
    hover:from-purple hover:to-pink text-sm '>
        Send
        <i className='fa-solid fa-envelope'></i>
        </button>
    </div>
  )
}

export default ContactForm