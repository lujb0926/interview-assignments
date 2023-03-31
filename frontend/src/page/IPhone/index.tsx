import React, { useState } from "react"
import './index.css'
import '../Home/index.css'
const AirPods = () => {
  const [title, setTitle] = useState('xPhone')
  const [subTitle, setSubTitle] = useState('Lots to love.Less to Spend')
  const [subTitle1, setSubTitle1] = useState('Starting at $399.')
  return (
    <div className="page-container page-container-dark">
      <div>
        <div className="title-content">
          {title}
        </div>
        <div className="title-content">
          {subTitle}
        </div>
        <div className="title-content">
          {subTitle1}
        </div>
      </div>
      <img className="img-content-scale" src={require("../../assets/iphone.png")} alt="" />
    </div>
  )
}

export default AirPods