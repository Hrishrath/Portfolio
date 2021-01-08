import React from 'react'
import SkillBar from './Shared/SkillBar'

const Skills = () => {
  return (
    <div className="container skills" id = "section4">
    <div className = "row">
    <div className="col-lg-12 col-md-12">
       <h1>SKILLS</h1>
    </div>
    </div>
    <div className="row">
        <div className="col-lg-6 col-md-6">
            <SkillBar skillName = "Javascript" value = "75%"/>
        </div>
        <div className="col-lg-6 col-md-6">
        <SkillBar skillName = "React Js" value = "50%"/>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-6 col-md-6">
            <SkillBar skillName = "Java" value = "70%"/>
        </div>
        <div className="col-lg-6 col-md-6">
        <SkillBar skillName = "Node Js" value = "60%"/>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-6 col-md-6">
            <SkillBar skillName = "Angular" value = "40%"/>
        </div>
        <div className="col-lg-6 col-md-6">
        <SkillBar skillName = "Css" value = "45%"/>
        </div>
    </div>
    <div className="row">
      
    </div>
</div>

  )
}

export default Skills
