import * as React from "react"
import { useEffect } from "react";
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  useEffect(() => {console.log(props)}, []);
  
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props["item-name"]}</h4>

      <ul className="fact-list">
        {nutritionFacts.map((item, i) => (
            <NutritionalLabelFact item={props.item} ele={item} key={item.id} att={item.attribute} label={item.label}/>
        ))}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {

  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item[props.att]}</span>
    </li>
  )
}

export default NutritionalLabel
