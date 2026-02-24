import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import axios from "axios";
import toast from "react-hot-toast";
import './orders.css'

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  const { currency, backend_url, token } = useContext(ShopContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post(
          `${backend_url}/api/user/myOrders`,
          {},
          { headers: { token } },
        );
        if (response.data.success) {
          setOrders(response.data.orders);
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error);
      }
    };
    fetchOrders();
  }, [backend_url, token]);

  return (
    <>
      <div className="orders-container">
        <div style={{justifySelf:"center",marginBottom:"50px"}} className="orders-top">
          <h1>Your Orders</h1>
        </div>
        <div
          className="orders-header"
          style={{ display: "flex", justifyContent: "space-between",padding:"10px" }}
        >
          <div className="address">
            <h2>County</h2>
          </div>

          <div className="address">
            <h2>Street</h2>
          </div>

          <div className="address">
            <h2>Amount</h2>
          </div>

          <div className="address">
            <h2>Status</h2>
          </div>

          <div className="address">
            <h2>Method</h2>
          </div>

          <div className="address">
            <h2>Status</h2>
          </div>
        </div>
        {orders.map((order, index) => (
          <>
            <hr />
            <div
              className="orders-header"
              key={index}
              style={{ display: "flex", justifyContent: "space-between",padding:"10px" }}
            >
              <div className="address">
                <p>No:{index+1} {order.address.county}</p>
              </div>

              <div className="address">
                <p>{order.address.street}</p>
              </div>

              <div className="address">
                <p>{currency} {order.amount}</p>
              </div>

              <div className="address">
                <p>{order.payment===false?"not paid":"paid"}</p>
              </div>

              <div className="address">
                <p>{order.paymentMethod==="COD"?"Cash on Delivery":""}</p>
              </div>

              <div className="address">
                <p>{order.status}</p>
              </div>
            </div>
            {/*--------------------------------- */}
          </>
        ))}
      </div>
    </>
  );
};

export default OrdersPage;
