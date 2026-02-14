import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { CartData } from '../../assets/assets'

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-back-btn">
         <Link to="/products"><button>Shop</button></Link> 
        </div>

      <hr />
      <div className="cart-header">
        <h2>Shopping Cart</h2>
      </div>
      <hr/>

      <div className="cart-sub-header">
        <h3>Product</h3>
        <div className="sub-header-header">
          <h2>Quantity</h2>
          <h2>Subtotal</h2>
        </div>
      </div>
      <hr />

      <div className="cart-data-container">
        {
          CartData.map((item,index)=>(
            <div key={index} className="cart-data">

              <div className="cart-row">
              <div className="cart-col">
                <img src={item.image} alt="" />
              
                <div className="cart-col-1">
                  <h3>{item.name}</h3>
                  <p>kes {item.price}</p>
                  <small>Delivery CBD: 100</small><br/>

                  <button>Remove</button>
                </div>

                <div className="cart-buttons">
                  <p>+</p>
                  <p>3</p>
                  <p>-</p>
                </div>
                <div className="cart-subtotal">
                 <p>kes {item.price}</p> 
                </div>

                </div>
              </div>
              <hr />
            </div>
            
          ))
        }
      </div>

      <div className="cart-footer">
        <div className="cart-left">
          <button>Clear Cart</button>
        </div>
        <div className="cart-right">
          <h1>TOTAL: KES 1300</h1>
         <Link to='/checkout'><button>Checkout</button></Link> 
        </div>
      </div>


    </div>
  )
}

export default Cart