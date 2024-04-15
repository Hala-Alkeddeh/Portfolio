import {Line} from 'rc-progress';
import { useState , useEffect } from 'react';


const LinearProgressBar = ({skillValue , skillName}) => {
const [progressValue , setprogressValue]=useState(0);
useEffect(()=> {
    const timer = setTimeout(()=> {
        setprogressValue(skillValue);
    }, 1000);
    return () => clearTimeout(timer);
}, []);
return (
    <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
            <p>
                {skillName}
            </p>
            <p>
                {progressValue}%
            </p>
        </div>
    <div>
        <Line 
        percent={progressValue} 
        strokeColor={'#a569b6'}
        transition='width 2s ease-in-out'
        />
    </div>
    </div>
)
}

export default LinearProgressBar