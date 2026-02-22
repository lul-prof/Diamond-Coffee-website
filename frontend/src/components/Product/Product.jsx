import React, { useEffect, useState } from 'react'
import './Product.css'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const Product = (props) => {
    const [token,setToken]=useState("");
    const navigate=useNavigate();
    const registerRedirect=()=>{
        try {
            navigate('/register');
            toast.success("Register to proceed")
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }
    useEffect(()=>{
        const fetchToken=async()=>{
            try {
                setToken(localStorage.getItem("token"))
            } catch (error) {
                console.log(error);
                toast.error(error)
            }
        }
        fetchToken();
        //localStorage.removeItem("token")
        
    },[token])

  return (
    <div className="product-container">
        <div className="product-image">
           <Link to={`/product/${props.index}`} ><img src={props.image} alt="coffee" /></Link> 
        </div>
        <div className="product-btn">
            <button onClick={()=>(!token?registerRedirect():toast.success("Added to cart"))}>Add To Cart</button>
        </div>
        <div className="product-title">
            <h3>{props.name}</h3>
        </div>
        <div className="product-title">
            <h5>{props.description}</h5>
        </div>
        <div className="product-price">
            <p>kes {props.price}</p>
        </div>
    </div>
  )
}

export default Product