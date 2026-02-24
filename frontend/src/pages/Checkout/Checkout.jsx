import React, { useContext, useEffect, useState } from "react";
import "./Checkout.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ShopContext } from "../../context/ShopContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [paypal, setPaypal] = useState(false);
  const [mpesa, setMpesa] = useState(false);
  const [cod, setCod] = useState(true);
  const navigate = useNavigate();

  const [orders,setOrders]=useState({});
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [county, setCounty] = useState("");
  const [street, setStreet] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const { getCartAmount, cartItems, backend_url, token, setCartItems, currency,delivery_fee } =
    useContext(ShopContext);

  const formData = new FormData();
  const placeOrder = async () => {
    try {
      formData.append("fname", fname);
      formData.append("lname", lname);
      formData.append("county", county);
      formData.append("street", street);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("notes", notes);

      /*
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            date:Date.now(),
             */

      const response = await axios.post(
        `${backend_url}/api/user/placeOrder`,
        {
          items: cartItems,
          amount: getCartAmount(),
          address: { fname, lname, county, street, phone, email, notes },
        },
        { headers: { token } },
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const cashOnDelivery = async () => {
    try {
      if (fname === "" || lname === "" || street==="" || county==="" || phone==="" || email==="") {
        toast.error("Provide all the details");
      } else {
        if (getCartAmount() > 150) {
          (placeOrder(), toast.success("Order Queued for Processing"));
          setCartItems({});
          navigate("/orders");
        } else {
          toast.error("Add item to cart.");
          navigate("/products");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(()=>{
    const fetchOrders=async()=>{
      try {
        const response=await axios.post(`${backend_url}/api/user/myCart`,{},{headers:{'Content-Type': 'application/json',"token":token}})
        if(response.data.success){
          setOrders(response.data.cartData);
          console.log(response.data.cartData);
          
          toast.success(response.data.message);
        }else{
          toast.error(response.data.message);
        }
        
      } catch (error) {
        toast.error(error);
      }
    }
    fetchOrders();
  },[backend_url,token])

  return (
    <>
      <div className="checkout-container">
        <div className="checkout-left">
          <div className="checkout-left-header">
            <h1>Delivery Details</h1>
          </div>
          <form className="checkout-form" method="post">
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                name=""
                id=""
                required
              />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                name=""
                id=""
                required
              />
            </div>
            <div className="form-group">
              <label>County</label>
              <input
                type="text"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                name=""
                id=""
                required
              />
            </div>
            <div className="form-group">
              <label>Street Address</label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                name=""
                id=""
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name=""
                id=""
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name=""
                id=""
                required
              />
            </div>

            <div className="form-group">
              <label>Order Notes(Optional)</label>
              <textarea
                name=""
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                id=""
                rows={4}
                placeholder="Notes about your order"
              ></textarea>
            </div>
          </form>
        </div>

        <div className="checkout-right">
          <div className="checkout-right-header">
            <h1>Your Order</h1>
          </div>
          <div className="checkout-right-details">
            <div className="checkout-detail-2">
              <p>SubTotal</p>
              <b>{getCartAmount()}</b>
            </div>
            <hr />

            <div className="checkout-detail-3">
              <p>Shipping</p>
              <b>{currency} {delivery_fee}</b>
            </div>
            <hr />

            <div className="checkout-detail-4">
              <p>Total</p>
              <b>{currency} {getCartAmount()}</b>
            </div>
          </div>

          <div className="payment-option">
            <h2>Pay with</h2>
            <div className="mpesa-div">
              <div
                onClick={() => (
                  setMpesa(!mpesa),
                  setPaypal(false),
                  setCod(false)
                )}
                style={{ backgroundColor: mpesa ? "green" : "" }}
                className="mpesa-box"
              ></div>
              <h2>Mpesa</h2>
            </div>

            <div className="paypal-div">
              <div
                onClick={() => (
                  setPaypal(!paypal),
                  setMpesa(false),
                  setCod(false)
                )}
                style={{ backgroundColor: paypal ? "blue" : "" }}
                className="paypal-box"
              ></div>
              <h2>Paypal</h2>
            </div>

            <div className="cod-div">
              <div
                onClick={() => (
                  setCod(!cod),
                  setMpesa(false),
                  setPaypal(false)
                )}
                style={{ backgroundColor: cod ? "orangered" : "" }}
                className="cod-box"
              ></div>
              <h2>cash on delivery</h2>
            </div>

            {mpesa ? (
              <>
                <div className="mpesa-popup">
                  <h2>
                    Lipa na Mpesa <img src={assets.MpesaIcon} alt="" />
                  </h2>
                  <div className="mpesa-mini-popup">
                    <p>
                      Your phone number must be registered with Mpesa & ON for
                      this to work. You will get a pop-up on your phone asking
                      you to confirm payment. Enter your service(MPesa) PIN to
                      proceed. In case you don't see the pop up on your phone,
                      please upgrade your SIM card by dialing *234*1*6#. You
                      will receive a confirmation message shortly afterwards.
                    </p>
                    <br />
                    <b>Confirm M-PESA Number</b>
                    <br />
                    <input type="text" name="" id="" />
                  </div>
                </div>
                <div className="mpesa-btn">
                  <button>Pay Now</button>
                </div>
              </>
            ) : paypal ? (
              <>
                <div className="paypal-popup">
                  <button>Pay With paypal</button>
                </div>
              </>
            ) : cod ? (
              <>
                <div className="cod-popup">
                  <button onClick={() => cashOnDelivery()}>
                    Cash On Delivery
                  </button>
                </div>
              </>
            ) : (
              <>
                <h5>Please select a payment method to proceed</h5>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
