import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { CartData } from '../../assets/assets'

const Cart = () => {
  return (
    <>
    <div className="cart-container">
      <div className="cart-back-btn">
         <Link to="/products"><button>Shop</button></Link> 
        </div>

      <div className="cart-header">
        <h2>Shopping Cart</h2>
      </div>
      <hr/>
     {/*Cart Top*/}
      <div className="cart-top">
        <div className="cart-top-left">
          <p>product</p>
        </div>

        <div className="cart-top-right">
          <div className="cart-top-right-item">
           <p>Quantity</p>
          </div>

          <div className="cart-top-right-item">
           <p>Subtotal</p>
          </div>

        </div>
      </div>
      <hr/>

      {/*Cart Center*/}
      {
        CartData.map((item,index)=>(
          <>
          <div key={index} className="cart-center">
            <div className="cart-center-left">
              <div className="cart-center-left-left">
                <img src={item.image} alt="" />
              </div>
              <div className="cart-center-left-right">
                <p>{item.name}</p>
                <p>CBD Delivery~100</p>
                <p>kes {item.price}</p>
                <button>remove</button>
              </div>

            </div>
             

            <div className="cart-center-right">

              <div className="cart-center-right-left">
                <div className="cart-center-add">
                <p>+</p>
              </div>
              <div className="cart-center-quantity">
                <p>5</p>
              </div>
              <div className="cart-center-reduce">
                <p>-</p>
              </div>
              </div>

              <div className="cart-center-right-right">
                <p>kes {item.price}</p>
              </div>
              
            </div>
            

          </div>
          <hr />
          </>
         
          
        ))
      }

     

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
    </>
  )
}

export default Cart