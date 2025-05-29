import "./Toggle.css"
import React, { useContext } from 'react'
import Sun from "../../img/Sun.svg"
import Moon from "../../img/Moon.svg"
import {ThemeContext} from "../../context"
const Toggle = () => {
  const theme=useContext(ThemeContext);
  const handleClick=()=>{
    theme.dispatch({type:"TOGGLE"})
  }
  return (
    <div className="t">
        <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon" />
        <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode?45:15}}></div>
    </div>
  )
}

export default Toggle
