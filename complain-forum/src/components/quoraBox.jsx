import React from 'react'
import { RxAvatar } from "react-icons/rx";
import "./CSS/quoraBox.css"

const QuoraBox = () => {
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
      <RxAvatar />
      </div>
      <div className="quoraBox__quora">
        <p>What is your Complaints ?</p>
      </div>
    </div>
  )
}

export default QuoraBox