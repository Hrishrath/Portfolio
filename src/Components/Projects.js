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
        src = "https://lh3.googleusercontent.com/6GK8w8B-tzJvSZko44xzTyqEjhy6o4x8EDY8UL6AyBdPkaaPPE5AFtkGtrBR1frAifowQrWkvtdRl-RMxVGSQIYuR5SUvhtRImIrJ-e0VFDd6VPbHkO538zuJZNIc3qENAe5Iq-Wq61rCvN6BCD2SUWW5jJ3IAbtpoTjLSfKcM486uOPgxapH_e8-ULDlR9Lhvm6qVv9BYwN17ymbaILG-Z9YAlWNpP3N6_nSe2iLqLpIQ5p7RnamIaJmsSxDXDhhKsouDhX0jdDwn5zEDTxhJTLLjIQpTuc96S7FRxgBZHqZ10VKTF_q321bHzeSdJbimdFVAytcVUSWW53oWJAXYLvF1ysMM_0SUmnQhhvomecr-6NuGZBb6Zu-8hsL-1fBfVceo7wrsFDJY75utBXVrB6yskhJPiPY2e23wwDVsPIDnI0MyYOa09YHmgTzWYtXrxDy1Lso1MeqXcNHRp15kDQXyszGnjopFMtEdOD_4gI8EXVdkURxWfGhKmgwJVmUPlu_VTue4RESwmYMay9SXQVqKWAI__zJJhfvnUMLqXlEoNcecfdL0VZIEjrD5h-y00iD7-qDb75IyeIzRt5_8L71GtQIjO857HKip0-TCPU8czjKGQmzJruElawNopkqwtZBuDeJP8QwBAIJtlHF8FbDAqTy-9B-zS14QGgUox5HASJR0NNagKOa4RJeFM=w1349-h605-no?authuser=0"
        title = "FruitLust"
        subtitle = "Fruits & juices e-shop"
        url = "http://www.fruitlust.store"
        tags = "FRONTEND"
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


