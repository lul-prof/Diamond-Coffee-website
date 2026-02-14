import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

const Product = (props) => {
  return (
    <div className="product-container">
        <div className="product-image">
           <Link to={`/product/${props.index}`} ><img src={props.image} alt="coffee" /></Link> 
        </div>
        <div className="product-btn">
            <button>Add To Cart</button>
        </div>
        <div className="product-title">
            <h3>{props.name}</h3>
        </div>
        <div className="product-price">
            <p>kes {props.price}</p>
        </div>
    </div>
  )
}

export default Product