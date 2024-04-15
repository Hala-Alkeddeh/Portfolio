import LinearProgressBar from "../LinearProgressBar/LinearProgressBar"

let Softs=[
    {id:1 , name:'Teamwork' , percent:85},
    {id:2 , name:'Communication' , percent:75},
    {id:3 , name:'Problem Solving' , percent:90},
    {id:4 , name:'Creativity' , percent:80},
]
const SoftSkills = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-5 items-start">
        <h1 className="titleSecondry">
            Soft Skills
        </h1>
        <div className="flex flex-col gap-3 md:gap-5">
        {Softs.map(soft => (
        <div className="w-[90vw] md:w-[42vw]"  key={soft.id}>
            <LinearProgressBar key={soft.id} skillValue={soft.percent} skillName={soft.name}/>
        </div>
    ))}
    </div>
    </div>
  )
}

export default SoftSkills