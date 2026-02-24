import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { assets} from '../../assets/assets'
import { ShopContext } from '../../context/ShopContext'

const Cart = () => {
  const {currency,products,updateQuantity,setCartItems,cartItems,addToCart,delivery_fee,getCartAmount}=useContext(ShopContext);
  const [cartData,setCartData]=useState([]);

  useEffect(()=>{
    if(products.length>0 && Object.keys(cartItems).length>0){
      const tempData=[];

      for (const productId in cartItems){
        if(cartItems[productId]>0){
          tempData.push({
            _id:productId,
            quantity:cartItems[productId],
          });
        }
      }
      setCartData(tempData);
      console.log(tempData);
    }

      
    
  },[cartItems,products])
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

        cartData.map((item,index)=>{
          const product=products.find((product)=>product._id===item._id);
          
          return(
          <>
          <div key={index} className="cart-center">
            <div className="cart-center-left">
              <div className="cart-center-left-left">
                <img src={product.images[0]} alt="" />
              </div>
              <div className="cart-center-left-right">
                <p>{product.title}</p>
                <p>CBD Delivery~{delivery_fee}</p>
                <p>{currency} {product.price}</p>
                <button onClick={()=>updateQuantity(item._id,0)}>remove</button>
              </div>

            </div>
             

            <div className="cart-center-right">

              <div className="cart-center-right-left">
                <div className="cart-center-add">
                <img onClick={()=>addToCart(item._id)} src={assets.PlusIcon} alt="" />
              </div>

              <div className="cart-center-quantity">
                <p>{item.quantity}</p>
              </div>

              <div className="cart-center-reduce">
                <img onClick={()=>updateQuantity(item._id,(item.quantity-1))} src={assets.MinusIcon} alt="" />
              </div>
              
              </div>

              <div className="cart-center-right-right">
                <p>kes {product.price * item.quantity + delivery_fee}</p>
              </div>
              
            </div>
            

          </div>
          <hr />
          </>
          ) 
      })
      }

     

      <div className="cart-footer">
        <div className="cart-left">
          <button onClick={()=>(setCartItems({}) && setCartData([]))}>Clear Cart</button>
        </div>
        <div className="cart-right">
          <h1>kes {getCartAmount()}</h1>
         <Link to='/checkout'><button>Checkout</button></Link> 
        </div>
      </div>


    </div>
    
    </>
    
  )
}

export default Cart