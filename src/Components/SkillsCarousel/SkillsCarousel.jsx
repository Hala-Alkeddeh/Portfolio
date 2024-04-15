import React from 'react'
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

let skills=[
    {id:1, name: 'HTML', percent:90},
    {id:2, name: 'CSS', percent:90},
    {id:3, name: 'JavaScript', percent:80},
    {id:4, name: 'React.Js', percent:75},
    {id:5, name: 'Bootstrap', percent:70},
    {id:6, name: 'Tailwind', percent:80},
    {id:7, name: 'Next.js', percent:60},
    {id:8, name: 'API & Json', percent:70},
] ;

const SkillsCarousel = () => {

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <Carousel 
    swipeable={true}
    draggable={true}
    responsive={responsive}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={2000}
    keyBoardControl={true}
    customTransition="all 0.5s"
    transitionDuration={500}
    containerClass="carousel-container"
    itemClass="carousel-item-padding-40-px">
      {skills.map(skill => (
          <div  key={skill.id}>
            <CircularProgressBar key={skill.id} skillValue={skill.percent} skillName={skill.name}/>
          </div>
      ))}
    </Carousel>
  )
}

export default SkillsCarousel