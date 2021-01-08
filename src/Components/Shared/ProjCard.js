import React from 'react'

const ProjCard = (props) => {
  return (
    <div className="col-12 col-md-4">
        <a className="" href="#modal-project-1" data-toggle="modal">
            <img className="card-img-top" src={props.src} alt="Nanovo"/>
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <h4 className="card-subtitle">{props.subtitle}</h4>
                <p className="card-tags">{props.tags}</p>
            </div>
        </a>
    </div>
  )
}

export default ProjCard
