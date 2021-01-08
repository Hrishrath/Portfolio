import React from 'react'
import Test from './Test'
import handleToggle from './Test'
import {myFunction } from "../index"





const Header = () => {

   return (
    <div className = "header">
      <label className = ""><b>blubuc</b></label>
      <button className="btn btn-primary navbar-toggler-icon" id="head-menu-toggle" onClick={myFunction}></button>    
    </div>
  )
}

export default Header
