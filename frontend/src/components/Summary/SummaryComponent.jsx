import React from 'react'
import './Summary.css'

const SummaryComponent = (props) => {
  return (
    <div className="summary-container">

        <div className="summary-img-container">
            <div className="img-image1-container">
                <img src={props.image} alt="" style={{minHeight:props.height}} />
            </div>

        </div>

        <div className="summary-details-container">
            <h1>{props.title}</h1>

            <div className="summary-text-container">
                <p>{props.text}</p>
            </div>
            
        </div>
    </div>
  )
}

export default SummaryComponent