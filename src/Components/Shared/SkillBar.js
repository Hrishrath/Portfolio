import React from 'react'

const SkillBar = (props) => {
  return (
    <div className="container skillbar">
    <div className="row  skill-name">
        <div className="col-lg-12 col-md-12">
            {props.skillName}
        </div>
    </div>
    <div className="row">
        <div className="col-lg-12 col-md-12 progress">
            <div className="progress-bar" role="progressbar" style={{width:`${props.value}`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
</div>
  )
}

export default SkillBar
