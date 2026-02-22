import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "kes";
  const delivery_fee = 100;
  const backend_url = import.meta.env.VITE_BACKEND_URI;
  const admin_url = import.meta.env.VITE_ADMIN_URI;
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);

  const addToCart = async (productId) => {
    let CartData = structuredClone(cartItems);
    if (CartData[productId]) {
      CartData[productId] += 1;
    } else {
      CartData[productId] = {};
      CartData[productId] = 1;
    }
    setCartItems(CartData);
    if (token) {
      try {
        await axios.post(
          `${backend_url}/api/user/addToCart`,
          { productId },
          { headers: { token } },
        );
        toast.success("Item added to cart Successfully.");
      } catch (error) {
        console.log(error);
        toast(error.message);
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;

    if (!cartItems || typeof cartItems !== "object") {
      return 0;
    }

    for (const productId in cartItems) {
      try {
        if (cartItems[productId] > 0) {
          totalCount += cartItems[productId];
        }
      } catch (error) {
        console.log(error);
        toast(error.message);
      }
    }
    return totalCount;
  };

  useEffect(() => {}, [cartItems]);

  const updateQUantity = async (productId, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[productId] = quantity;
    setCartItems(cartData);
    if (token) {
      try {
        await axios.post(
          `${backend_url}/api/user/updateCart`,
          { productId, quantity },
          { headers: { token } },
        );
      } catch (error) {
        console.log(error);
        toast(error.message);
      }
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
          toast(error.message);
        }
      }
    }
    return totalAmount;
  };

  const myCart = async (token) => {
    try {
      const response = await axios.post(
        `${backend_url}/api/user/myCart`,
        {},
        { headers: { token } },
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast(error.message);
    }
  };

  const productsData = async () => {
    try {
      const response = await axios.get(`${backend_url}/api/user/products`);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast(error.message);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    productsData();
  }, []);

  useEffect(() => {
    const getToken = async () => {
      try {
        if (!token && localStorage.getItem("token")) {
          setToken(localStorage.getItem("token"));
        } else {
          toast.error("Authorization failed");
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };
    getToken();
  }, [token]);

  const value = {
    currency,
    addToCart,
    token,
    setToken,
    delivery_fee,
    backend_url,
    admin_url,
    isLoading,
    setIsLoading,
    cartItems,
    setCartItems,
    getCartCount,
    updateQUantity,
    getCartAmount,
    myCart,
    products,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
