import React from 'react';
import {myFunction} from "../index.js"

const Menu = (props) => {
 

return (
    <div className="d-flex" id="wrapper">


<div className="" id="sidebar-wrapper">
  
  <div className="list-group list-group-flush" onClick = {myFunction}>
    <a href="#section1" className="list-group-item list-group-item-action "><span className = "nav-counter">01</span><b>TOP</b></a>
    <a href="#section2" className="list-group-item list-group-item-action "><span className = "nav-counter">02</span><b>ABOUT ME</b></a>
    <a href="#section3" className="list-group-item list-group-item-action "><span className = "nav-counter">03</span><b>MY SERVICES</b></a>
    <a href="#section4" className="list-group-item list-group-item-action "><span className = "nav-counter">04</span><b>SKILLS</b></a>
    <a href="#section5" className="list-group-item list-group-item-action "><span className = "nav-counter">05</span><b>EXPERIENCE</b></a>
    <a href="#section6" className="list-group-item list-group-item-action "><span className = "nav-counter">06</span><b>PROJECTS</b></a>
    {/* <a href="#section7" className="list-group-item list-group-item-action "><span className = "nav-counter">07</span><b>TESTIMONIALS</b></a> */}
    <a href="#section8" className="list-group-item list-group-item-action "><span className = "nav-counter">07</span><b>CONTACT</b></a>
  </div>
</div>
</div>
)
}

export default Menu;