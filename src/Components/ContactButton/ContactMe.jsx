import React from 'react'
import telegram from '/telegram.svg'

const ContactMe = () => {
  return (
    <a href='https://t.me/Hala_Kd' className='hidden h-11 w-36 rounded-full md:flex items-center gap-1 justify-center 
    bg-gradient-to-l from-pink to-purple hover:transition-all text-white hover:scale-105 hover:duration-500 transition-colors
    hover:from-purple hover:to-pink text-sm '>
        Contact Me
        <img src={telegram} className='w-5' />
    </a>
  )
}

export default ContactMe