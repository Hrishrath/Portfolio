import React from 'react'
import Timeline from './Shared/Timeline'


const Experience = () => {
  return (
    <div className="container exper" id = "section5">
    <div className = "row">
    <div className="col-lg-12 col-md-12">
       <h1>EXPERIENCE</h1>
    </div>
    </div>
    <div className="row timeline timeline-animated">
    <div className="col-lg-12 col-md-12">
    <Timeline  startDate = "2020" endDate = "now" companyName = "Freelance" jobTitle = "Full Stack Developer"/>
    </div>
    <div className="col-lg-12 col-md-12">
    <Timeline  startDate = "2019" endDate = "2020" companyName = "Telebu Communications LLP" jobTitle = "Software Engineer - I"/>
    </div>
    <div className="col-lg-12 col-md-12">
    <Timeline  startDate = "2018" endDate = "2019" companyName = "Birla Corporation" jobTitle = "Software Engineer Trainee"/>

    </div>
    </div>
    </div>
  )
}

export default Experience
