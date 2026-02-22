import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const OrdersPage = () => {
  const [orders, setOrders]=useState([]);

  const {backend_url}=useContext(ShopContext);

  const token=localStorage.getItem("token");

  useEffect(()=>{
    const fetchOrders=async()=>{
      try {
        const response=await axios.post(`${backend_url}/api/user/myOrders`,{},{headers:{'Content-Type': 'application/json',"token":token}})
        console.log(response);
        if(response.data.success){
          setOrders(response.data.orders);
          toast.success(response.data.message);
        }else{
          toast.error(response.data.message);
        }
        
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
    fetchOrders();
  },[])
  return (
    <div className="orders-container">
      {
        orders.map((order,index)=>(
          <>
          <hr/>
          <div key={index} className="order-card">
          {/*--------------------------------- */}
            <div style={{display:"flex",gap:"1rem"}} className="order-address">
              <b>Address</b>
              <p>{order.address.street}</p>
              <p>{order.address.city}</p>
              <p>{order.address.zip}</p>
              <p>kes {order.amount}</p>
              <div className="items">
                {
                  order.items.map((item,index)=>(
                    <div key={index} className="item-div">
                      <p>{item.name}</p>
                      <p>{item.quantity}</p>
                      <p>{item.price}</p>
                    </div>
                  ))
                }
              </div>
              <div className="status-pay">
                <p>paid: {order.payment==false?"no":"yes"}</p>
              </div>

              <div className="method-pay">
                <p>{order.paymentMethod}</p>
              </div>

              <div className="order-status">
                <p>{order.status}</p>
              </div>
            </div>
          {/*--------------------------------- */}
          </div>
          </>
        ))
      }
    </div>
  )
}

export default OrdersPage