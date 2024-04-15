import {Circle} from 'rc-progress';
import { useState , useEffect } from 'react';


const CircularProgressBar = ({skillValue , skillName}) => {
  const [progressValue , setprogressValue]=useState(0);
  useEffect(()=> {
      const timer = setTimeout(()=> {
          setprogressValue(skillValue);
      }, 1000);
      return () => clearTimeout(timer);
  }, []);
  return (
    <div className='flex flex-col gap-2 items-center'>
      <div className='relative h-36 w-36 md:h-52 md:w-52'>
        <Circle 
        percent={progressValue} 
        strokeWidth={8} 
        trailColor='transparent' 
        strokeColor={{'10%' : '#a569b6' , '70%': '#4b67d8'}} 
        trailWidth={8} 
        strokeLinecap='butt'
        transition='stroke-dashoffset 0.7s ease'
        />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <p>
            {progressValue}%
          </p>
        </div>
      </div>
      <div>
        <p>
          {skillName}
        </p>
      </div>
    </div>
  )
}

export default CircularProgressBar