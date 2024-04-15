import menuIcon from '/Menu.svg';

const toggleMenu=()=>{
    let navMenu = document.getElementById('responsiveMenu');
    navMenu.classList.add('right-0');
    navMenu.classList.remove('-right-full');
}

const OpenMenu = () => {
  return (
    <button className='menuIcon block md:hidden ' onClick={toggleMenu}>
        <img src={menuIcon} alt="menu" className='w-14 scale-105 hover:scale-125' />
    </button>
  )
}

export default OpenMenu