import NavLinks from "./NavLinks"

const NavBarItems = () => {
  return (
    <div className="hidden md:block">
        <ul className=" md:flex md:flex-row md:items-center md:gap-5 lg:gap-8">
            <NavLinks/>
        </ul>
    </div>
  )
}

export default NavBarItems