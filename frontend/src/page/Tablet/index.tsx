import React, { useState } from "react"
import './index.css'
import '../Home/index.css'
const Tablet = () => {
  const [tabletTitle, setTabletTitle] = useState('Tablet')
  const [tabletSubTitle, setTabletSubTitle] = useState('Just the right amount of everything')
  return (
    <div className="page-container">
      <div>
        <div className="title-content">
          {tabletTitle}
        </div>
        <div className="sub-title-content">
          {tabletSubTitle}
        </div>
      </div>
      <img className="img-content" src={require("../../assets/tablet.png")} alt="" />
    </div>
  )
}

export default Tablet