
const AboutMeInfos = () => {
  return (
    <div className="flex flex-col max-w-[500px] w-full  md:max-w-[700px] md:w-[45vw] ">
        <p className='text-base md:text-lg pb-4 border-b-2 border-pink border-dashed text-center md:text-left'>
            An Electronics and Communications engineer & Front-End Developer with <span className="text-pink">ONE</span> year experience for <span className="text-pink">VICA WEB SOLUTIONS</span> and a strong JavaScript, Html, css, ReactJs. 
            My field of interest's are building new Web Technologies and Products Whenever possible, 
            I also apply my passion for developping products with Tailwind Css and Modern JavaScript Libraries and Frameworks.
        </p>
        <div className="flex flex-col gap-1 pt-4">
            <div className="flex items-center gap-2 text-sm md:text-lg ">
                <i className="fa-solid fa-location-dot text-pink"/>
                <p>Syria, Damascus</p>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-lg ">
                <i className="fa-solid fa-phone text-pink"/>
                <p>+963952633707</p>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-lg ">
                <i className="fa-solid fa-envelope text-pink"/>
                <p>Halakeddeh2002@gmail.com</p> 
            </div>
        </div>
    </div>
  )
}

export default AboutMeInfos