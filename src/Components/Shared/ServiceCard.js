import React from 'react'

const ServiceCard = (props) => {
  return (
    
    <div className="container servCard">
    <div className = "row">
    <div className="col-lg-12 col-md-12 servCount">
        <strong className = "card-counter">{props.count}</strong>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-12 col-md-12 servTitle">
        <h2 >{props.title}</h2>
        </div>
        </div>
    <div className="row">
    <p>
         {props.desc}
    </p>
    </div>
</div>
  )
}

export default ServiceCard

