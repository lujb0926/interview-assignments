import React, { useState } from "react"
import './index.css'
import '../Home/index.css'
const AirPods = () => {
  const [title, setTitle] = useState('Buy a Tablet or xPhone for college.')
  const [subTitle, setSubTitle] = useState('Get airPods.')
  return (
    <div className="page-container">
      <div>
        <div className="title-content">
          {title}
        </div>
        <div className="title-content">
          {subTitle}
        </div>
      </div>
      <img className="img-content" src={require("../../assets/airpods.png")} alt="" />
    </div>
  )
}

export default AirPods