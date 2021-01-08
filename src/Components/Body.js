import React from 'react'
import About from "./About"
import Contacts from './Contacts';
import Experience from './Experience';
import MyServices from "./MyServices"
import Projects from './Projects';
import Skills from './Skills';
// import Testimonials from './Testimonials';

const Body = () => {
  return (

    <div className="container">
  <div className="container" id = "section1">
    <div className="row">
    <div className="col-lg-4 col-md-4"></div>
    <div className="col-lg-4 col-md-4 profile">
    <img className = "profile-img" src = "https://pbs.twimg.com/profile_images/770637847489417216/r7LTchiP_400x400.jpg" alt = "profile"></img>
    </div>
    </div>
    <div className = "row">
    <h1 className = "profile-name ">Rishabh Rathore</h1>
    </div>
</div>
<About/>
<MyServices/>
<Skills/>

<Experience/>

<Projects/>
{/* <Testimonials/> */}
<Contacts/>


   </div>
    

  )
}

export default Body


