import React from 'react'

const Timeline = (props) => {
  return (
      <div className="timeline-item">
        <span className="timeline-date">{props.startDate}&nbsp;–&nbsp;{props.endDate}</span>
        <h3 className="timeline-title">{props.companyName}</h3>
        <p className="timeline-text">{props.jobTitle}</p>
    </div>
  )
}

export default Timeline
