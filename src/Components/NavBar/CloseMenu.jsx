import closemenu from '/cross.svg';

const toggleMenuClose=()=>{
    let navMenu = document.getElementById('responsiveMenu');
    navMenu.classList.remove('right-0');
    navMenu.classList.add('-right-full');
}

const CloseMenu = () => {
  return (
    <button className='block pt-8  px-5    md:hidden ' onClick={toggleMenuClose}>
        <img src={closemenu} alt="close" className='w-9 hover:scale-110' />
    </button>
  )
}

export default CloseMenu