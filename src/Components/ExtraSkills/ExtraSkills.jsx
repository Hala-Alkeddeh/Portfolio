import React from 'react'
import LanguagesSkill from '../LanguagesSkill/LanguagesSkill'
import SoftSkills from '../SoftSkills/SoftSkills'

const ExtraSkills = () => {
  return (
    <div className='flex flex-col md:flex-row gap-6 items-center md:justify-between'>
        <SoftSkills/>
        <LanguagesSkill/>
    </div>
  )
}

export default ExtraSkills