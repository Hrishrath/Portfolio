import React, {useState, useEffect} from 'react'

const Test = () => {

    const myFunction = () => {
        var element = document.getElementById("wrapper");
        element.classList.toggle("toggled");
    }

    return (
        <div class="d-flex" id="wrapper">

   
    <div class="" id="sidebar-wrapper">
      
      <div class="list-group list-group-flush" onClick = {myFunction}>
        <a href="#section1" class="list-group-item list-group-item-action "><spam className = "nav-counter">01</spam><b>TOP</b></a>
        <a href="#section2" class="list-group-item list-group-item-action "><spam className = "nav-counter">02</spam><b>ABOUT ME</b></a>
        <a href="#section3" class="list-group-item list-group-item-action "><spam className = "nav-counter">03</spam><b>MY SERVICES</b></a>
        <a href="#section4" class="list-group-item list-group-item-action "><spam className = "nav-counter">04</spam><b>SKILLS</b></a>
        <a href="#section5" class="list-group-item list-group-item-action "><spam className = "nav-counter">05</spam><b>EXPERIENCE</b></a>
        <a href="#section6" class="list-group-item list-group-item-action "><spam className = "nav-counter">06</spam><b>PROJECTS</b></a>
        {/* <a href="#section7" class="list-group-item list-group-item-action "><spam className = "nav-counter">07</spam><b>TESTIMONIALS</b></a> */}
        <a href="#section8" class="list-group-item list-group-item-action "><spam className = "nav-counter">07</spam><b>CONTACT</b></a>
      </div>
    </div>
  </div>
    )
}

export default Test
