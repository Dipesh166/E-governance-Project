import React from 'react'

import "./CSS/widgetContent.css"

import logo from  "../assets/nepal-logo.jpg"

const WidgetContent = () => {
  return (
    <div className="widget__contents">
        <div className="widget__content">
            <img src={logo} alt="" />
            <div className="widget__contentTitle">
                <h5>How to Eradicate Problems in Nepal</h5>
                <p>This is the Best way of tackle</p>
            </div>
        </div>
    </div>
  )
}

export default WidgetContent