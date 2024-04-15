import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
let items=[
    {id:1, text: 'Home', path:'Home'},
    {id:2, text: 'About', path:'About'},
    {id:3, text: 'Skills', path:'Skills'},
    {id:4, text: 'Portfolio', path:'Portfolio'},
    {id:5, text: 'Contact', path:'Contact'},
] ;

const FooterLinks = () => {
  return (
    items.map(item => (
        <li key={item.id} className='md:text-base text-xs'><Link to={item.path}  offset={-((document.documentElement.clientWidth >= 992 )? 96 : 80)}  spy={true}  >{item.text}</Link></li>
    ))    
  )
}

export default FooterLinks