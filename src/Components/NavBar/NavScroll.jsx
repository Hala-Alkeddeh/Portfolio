import React from 'react'

const NavScroll = () => {
    function changeBg(){
        let navbar = document.querySelector('#nav');
        let scroll=window.scrollY;
        if(scroll < 150){
            navbar.classList.remove('navbarScroll')
        }
        else{
            navbar.classList.add('navbarScroll')
        }
    }
    window.addEventListener('scroll',changeBg);
  return (
    <>
    </>
  )
}

export default NavScroll