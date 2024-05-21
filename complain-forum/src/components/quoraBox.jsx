import React from 'react'
import {Avatar} from "@mui/material"
import "./CSS/quoraBox.css"

const QuoraBox = () => {
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
     <Avatar/>
      </div>
      <div className="quoraBox__quora">
        <h5>What is your Complaints ?</h5>
      </div>
    </div>
  )
}

export default QuoraBox