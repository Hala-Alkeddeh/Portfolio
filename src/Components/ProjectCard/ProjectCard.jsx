const ProjectCard = ({imag , title , href , description}) => {
  return (
    <div className=" item w-[290px] h-[150px] md:w-[400px] md:h-[200px] relative shadow-[#0000004f] shadow-lg bg-white transition-all duration-300  rounded-xl pCard overflow-hidden">
        <img src={imag} alt={title} className="w-full h-full object-cover rounded-xl" />
        <div className= " itemBody w-full h-full top-0 -right-full transition duration-700 absolute text-lightColor bg-[#000000a5] backdrop:blur-sm flex flex-col items-center p-4 justify-between">
            <h1 className="font-semibold">
                {title}
            </h1>
            <p className="text-center text-xs md:text-sm">
                {description}
            </p>
            <a href={href} className="w-[90px] centered h-[30px] bg-lightColor text-pink cursor-pointer rounded-full ">Demo</a>
        </div>
    </div>
  )
}

export default ProjectCard