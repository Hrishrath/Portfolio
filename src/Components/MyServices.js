import React from 'react'
import ServiceCard from './Shared/ServiceCard'

const MyServices = () => {
  return (
    <div className="container" id = "section3">
      <h1>MY SERVICES</h1>

      <div className="row">
        <div className="col-lg-4 col-md-4">
        <ServiceCard count = "1" title = "Web Development"
          desc = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est."
      />
        </div>
        <div className="col-lg-4 col-md-4">
        <ServiceCard count = "2" title = "Web Design"
          desc = "Stet clita kasd gubergren, no sea takimata sanctus est. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."
      />
        </div>
        
    <div className="col-lg-4 col-md-4">
    <ServiceCard count = "3" title = "Web consulting"
          desc = "Stet clita kasd gubergren, no sea takimata sanctus est. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."
      />
    </div>
    </div> 
    </div>
  )
}

export default MyServices
