import LinearProgressBar from "../LinearProgressBar/LinearProgressBar"

let langs=[
    {id:1 , name:'Arabic' , percent:100},
    {id:2 , name:'English' , percent:85},
    {id:3 , name:'French' , percent:60},
    {id:4 , name:'Spanich' , percent:40},
]
const LanguagesSkill = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-5 items-start">
        <h1 className="titleSecondry">
            Languages
        </h1>
        <div className="flex flex-col gap-3 md:gap-5">
        {langs.map(lang => (
        <div  className="w-[90vw] md:w-[42vw]" key={lang.id}>
            <LinearProgressBar key={lang.id} skillValue={lang.percent} skillName={lang.name}/>
        </div>
    ))}
    </div>
    </div>
  )
}

export default LanguagesSkill