import React, { useState } from 'react'
import './Checkout.css'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Checkout = () => {
    const [paypal,setPaypal]=useState(false);
    const [mpesa,setMpesa]=useState(false);
    const [cod,setCod]=useState(true);
  return (
    <>
    <div className="checkout-container">

        <div className="checkout-left">
            <div className="checkout-left-header">
                <h1>Delivery Details</h1>
            </div>
            <form className='checkout-form' method='post'>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="form-group">
                    <label>County</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="form-group">
                    <label>Street Address</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="text" name="" id="" />
                </div>

                <div className="form-group">
                    <label>Order Notes(Optional)</label>
                    <textarea name="" id="" rows={4} placeholder='Notes about your order'></textarea>
                </div>


            </form>

        </div>

        <div className="checkout-right">
            <div className="checkout-right-header">
                <h1>Your Order</h1>
            </div>
            <div className="checkout-right-details">

                <div className="checkout-detail-1">
                    <p>Kenya AA Medium Roast x 1</p>
                    <b>kes 1,200</b>
                </div>
                <hr />

                <div className="checkout-detail-2">
                    <p>SubTotal</p>
                    <b>kes 1,200</b>
                </div>
                <hr />

                <div className="checkout-detail-3">
                    <p>Shipping</p>
                    <b>kes 100</b>
                </div>
                <hr />

                <div className="checkout-detail-4">
                    <p>Total</p>
                    <b>kes 1,300</b>
                </div>
            </div>

            <div className="payment-option">
                <h2>Pay with</h2>
                <div className="mpesa-div">
                    <div onClick={()=>(setMpesa(!mpesa),setPaypal(false),setCod(false))} style={{backgroundColor:mpesa?"green":""}} className="mpesa-box"></div>
                    <h2>Mpesa</h2>
                </div>

                <div className="paypal-div">
                    <div onClick={()=>(setPaypal(!paypal),setMpesa(false),setCod(false))} style={{backgroundColor:paypal?"blue":""}} className="paypal-box"></div>
                    <h2>Paypal</h2>
                </div>

                <div className="cod-div">
                    <div onClick={()=>(setCod(!cod),setMpesa(false),setPaypal(false))} style={{backgroundColor:cod?"orangered":""}} className="cod-box"></div>
                    <h2>cash on delivery</h2>
                </div>

                {
                    mpesa?
                <>
                <div className="mpesa-popup">
                    <h2>Lipa na Mpesa <img src={assets.MpesaIcon} alt="" /></h2>
                    <div className="mpesa-mini-popup">
                        <p>Your phone number must be registered with Mpesa & ON for this to work. You will get a pop-up on your phone asking you to confirm payment. Enter your service(MPesa) PIN to proceed. In case you don't see the pop up on your phone, please upgrade your SIM card by dialing *234*1*6#. You will receive a confirmation message shortly afterwards.</p><br />
                        <b>Confirm M-PESA Number</b><br />
                        <input type="text" name='' id='' />
                    
                    </div>

                </div>
                <div className="mpesa-btn">
                    <button>Pay Now</button>
                </div>
                </>
                :
                paypal?
                <>

                <div className="paypal-popup">
                    <button>Pay With paypal</button>
                </div>
                </>
                :
                cod?
                <>

                <div className="cod-popup">
                  <Link to='/orders' ><button onClick={()=>toast.success("order placed")}>Cash On Delivery</button></Link>  
                </div>
                </>
                :
                <>
                <h5>Please select a payment method to proceed</h5>
                </>
             }
            </div>

        </div>

    </div>
    </>
  )
}

export default Checkout