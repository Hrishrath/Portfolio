import React from 'react'
import ProjCard from './Shared/ProjCard'

const Projects = () => {
  return (
    <div className="container proj" id = "section6">
    <div className = "row ">
    <div className="col-lg-12 col-md-12">
       <h1>PROJECTS</h1>
    </div>
    </div>
    <div className="row">
      <ProjCard 
        src = "https://colorlib.com/wp/wp-content/uploads/sites/2/jevelin-photo-gallery-website-template.jpg"
        title = "Nanovo"
        subtitle = "Design e-shop"
        tags = "FRONTEND  —  BACKEND"
        />
      <ProjCard 
        src = "https://webdesigntips.blog/wp-content/uploads/2018/11/Top-21-Gallery-HTML5-Website-Templates-To-Showcase-Your-Stunning-Images-2018.jpg"
        
        title = "Bbop"
        subtitle = "Social Network for Musicians"
        tags = "DESIGN — FRONTEND  —  BACKEND"
        />
      <ProjCard 
        src = "https://i.pinimg.com/originals/a1/53/e7/a153e7095b43f0c7a8e8251b625029ab.jpg"
        
        title = "Janja Prokic"
        subtitle = "Jwelery e-shop"
        tags = "FRONTEND  —  BACKEND"
        />
        
    </div>
    </div>
  )
}

export default Projects


