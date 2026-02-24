import React, { useContext } from 'react'
import './Product.css'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { ShopContext } from '../../context/ShopContext';

const Product = (props) => {
    const navigate=useNavigate();
    const {currency,addToCart,token}=useContext(ShopContext);
    const registerRedirect=()=>{
        try {
            navigate('/register');
            toast.success("Register to proceed")
        } catch (error) {
            toast.error(error);
        }
    }
  return (
    <div className="product-container">
        <div className="product-image">
           <Link to={`/product/${props.index}`} ><img src={props.image} alt="coffee" /></Link> 
        </div>
        
        <div className="product-title">
            <h3>{props.name}</h3>
        </div>
        <div className="product-title">
            <h5>{props.description}</h5>
        </div>
        {/*
        <div style={{justifySelf:"left",fontWeight:"bolder"}} className="product-price">
            <p>{currency} {props.price}</p>
        </div>
        */}
    </div>
  )
}

export default Product