import "./Toggle.css"
import React from 'react'
import Sun from "../../img/Sun.svg"
import Moon from "../../img/Moon.svg"
const Toggle = () => {
  return (
    <div className="t">
        <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon" />
        <div className="t-button"></div>
    </div>
  )
}

export default Toggle
