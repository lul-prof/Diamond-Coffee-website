import React from 'react'
import './ProgressBar.css'

const ProgressBar = (props) => {
  return (
    <div className="loader-container">
        <div className="loader-widget">

        </div>
        <div className="loader-text">
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default ProgressBar