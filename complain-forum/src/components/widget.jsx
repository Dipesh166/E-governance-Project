import React from 'react'

import WidgetContent from './widgetContent'
import "./CSS/widget.css"

const Widget = () => {
  return (
    <div className='widget'>
      <div className="widget__header">
        <h5>Space to Follow</h5>
      </div>
      <div className="widget__contents">
        <WidgetContent/>
        <WidgetContent/>
        <WidgetContent/>

      </div>
      </div>
  )
}

export default Widget