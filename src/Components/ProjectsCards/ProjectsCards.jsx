import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import Travel from '/Travel.jpg'
import BookStore from '/BookStore.jpg'
import Organick from '/Organick.jpg'
import FurnitureShop from '/FurnitureShop.jpg'

let Projects=[
    {id:1 ,href:'https://hala-alkeddeh.github.io/vite/' ,title:'Travel Company' ,img:Travel ,description:'Multi pages website using ReactJs Vite and styling with CSS' },
    {id:2 ,href:'http://hala-alkeddeh.github.io/Task6-books/' ,title:'Book Store' ,img:BookStore ,description:'Book Store website using ReactJs and styling with Tailwind'},
    {id:3 ,href:'https://hala-alkeddeh.github.io/multiPages/' ,title:'Organick' ,img:Organick ,description:'Multi pages Website using HTML and CSS'},
    {id:4 ,href:'https://hala-alkeddeh.github.io/task/' ,title:'Furniture Shop' ,img:FurnitureShop ,description:'Responsive website using HTML and CSS'},
    {id:5 ,href:'https://hala-alkeddeh.github.io/vite/' ,title:'Travel Company' ,img:Travel, description:'Multiple pages website using ReactJs Vite and styling with CSS' },
    {id:6 ,href:'http://hala-alkeddeh.github.io/Task6-books/' ,title:'Book Store' ,img:BookStore,description:'Book Store website using ReactJs and styling with Tailwind' },
]

const ProjectsCards = () => {
  return (
    <div className='flex items-center justify-center w-full gap-5 flex-wrap transition-all duration-500'>
        {Projects.map(project => (
        <ProjectCard key={project.id} imag={project.img} title={project.title} href={project.href} description={project.description} category={project.category} />
    ))}
    </div>
  )
}

export default ProjectsCards