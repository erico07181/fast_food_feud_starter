import * as React from "react"
import "./Chip.css"
import {useState} from 'react';

export function Chip({ label = "", isActive = false, category}) {
  let buttonClassName;
  
  if(!isActive){
    buttonClassName = "chip"  
  }
  else{
    buttonClassName = "chip active"
  }

  return (
    <button className={buttonClassName}>
      <p className="label">{category}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
