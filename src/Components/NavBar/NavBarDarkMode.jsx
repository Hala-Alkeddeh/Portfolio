import dark from '/moon.svg'
import light from '/sun.svg'
import { useTheme } from './../../Theme'


const NavBarDarkMode = () => {
    const {darkMode , toggleDarkMode}=useTheme();
  return (
    <div>
        <div className='hidden md:flex items-center gap-2'>
            <button  onClick={toggleDarkMode}> { darkMode ? <img className='w-7 scale-150 hover:scale-[1.55]' src={light}/> : <img className='w-7 hover:scale-105'  src={dark} />} </button>
        </div>
    </div>
  )
}

export default NavBarDarkMode