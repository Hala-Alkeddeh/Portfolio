import React from 'react'
import './Footer.css'
import SocialMedia from '../SocialMediaLinks/SocialMedia'
import FooterLinks from '../FooterLinks/FooterLinks'

const Footer = () => {
  return (
    <footer className='relative w-full flex flex-col bg-[#aa78bb] text-lightColor  items-center justify-between p-5   '>
        <div className='waves'>
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
        </div>
        <div className='z-[1100]'>
        <SocialMedia/>
        </div>
        <ul className=" flex flex-row md:items-center gap-5 lg:gap-8 cursor-pointer m-2 ">
            <FooterLinks/>
        </ul>
        <p className='md:text-base text-xs'>
            &copy; 2024 Hala Alkeddeh All Rights Reverced
        </p>
    </footer>
  )
}

export default Footer