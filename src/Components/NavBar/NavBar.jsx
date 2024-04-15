import logo from '/HK.png'
import NavBarDarkMode from './NavBarDarkMode'
import NavBarItems from './NavBarItems'
import { useTheme } from './../../Theme';
import ContactMe from './../ContactButton/ContactMe';
import NavScroll from './NavScroll';
import { Link, animateScroll as scroll } from 'react-scroll';
import NavBarMenu from './NavBarMenu';



const NavBar = () => {
  const {darkMode}=useTheme();
  return (
    <nav id='nav' className="flex h-20 md:h-24 justify-between items-center fixed text-center bgLightDark px-6 md:px-14 z-[99999999]">
      <Link to='Home' >
      <img src={logo} alt="HK" className='w-20 md:w-24 hover:scale-105 hover:duration-500'/>
      </Link>
      <NavBarItems />
      <div className='flex items-center gap-3'>
        <NavBarDarkMode />
        <ContactMe/>
      </div>
      <NavBarMenu/>
      <NavScroll/>
    </nav>
  )
}

export default NavBar