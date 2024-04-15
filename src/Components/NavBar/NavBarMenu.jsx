import { useTheme } from './../../Theme';
import ToggleSwitch from './ToggleSwitch';
import NavLinks from './NavLinks';
import OpenMenu from './OpenMenu';
import CloseMenu from './CloseMenu';

const NavBarMenu = () => {
    const {darkMode}=useTheme();
  return (
    <div className='block md:hidden '>
        <OpenMenu/>
        <div className='fixed  flex flex-col items-start -right-full ease-in-out w-72  border-l-2 border-pink bgLightDark  duration-500 h-screen  overflow-auto bg-light-bg shadow-xl   dark:bg-dark-bg  top-0  z-50   md:hidden' id='responsiveMenu'> 
            <CloseMenu/>
            <div className='border-b-2 border-b-pink py-8 w-full '>
                <ul className=" flex flex-col items-start right-0 p-5 gap-6 md:hidden">
                <NavLinks/>
                </ul>
            </div>
            <div className='flex p-5 items-center justify-between w-full h-20'>
            <p className='font-normal'>{ darkMode ? 'Light mode' :'Dark mode'}</p>
                <ToggleSwitch/>
            </div>
        </div>
    </div>
  )
}

export default NavBarMenu