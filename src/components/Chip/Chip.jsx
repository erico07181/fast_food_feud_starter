import * as React from "react"
import "./Chip.css"


export function Chip({ label = "", isActive = false, useClick = () => { } }) {
  let buttonClassName;
  
  if(!isActive){
    buttonClassName = "chip"  
  }
  else{
    buttonClassName = "chip active"
  }

  return (
    <button className={buttonClassName} onClick={useClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
