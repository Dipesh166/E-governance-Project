import React from 'react'
import QuoraHeader from './quoraHeader'
import Sidebar from './sidebar'
import Feed from './feed'
import Widget from './widget'
import './CSS/quora.css'

const Quora = () => {
  return (
    <div className='quora'>

        <QuoraHeader/>

        <div className="quora__contents">
          <div className="quora__content">
           <Sidebar/>
           <Feed/>
           <Widget/>
          </div>
        </div>

    </div>
  )
}

export default Quora