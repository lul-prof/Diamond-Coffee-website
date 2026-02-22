import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import toast from "react-hot-toast";
import axios from "axios";

const SingleProduct = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [image, setImage] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URI;

  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const registerRedirect = () => {
    try {
      navigate("/register");
      toast.success("Register to proceed");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  useEffect(() => {
    const fetchToken = async () => {
      try {
        setToken(localStorage.getItem("token"));
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };
    fetchToken();
    //localStorage.removeItem("token")
  }, [token]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${url}/api/user/product/${_id}`);
        console.log(response);
        if (response.data.success) {
          setProduct(response.data.product);
          setImage(response.data.product.images[0]);
          toast.success(response.data.message);
        } else {
          console.log(response.data.message);
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };

    fetchProduct();

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${url}/api/user/products`);
        console.log(response);
        if (response.data.success) {
          setProducts(response.data.products);
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };
    fetchProducts();
  }, [_id, url]);
  return (
    <>
      <div className="single-product-container">
        <div className="product-nav">
          <p>
            {" "}
            <Link to="/">
              <b>Home</b>
            </Link>{" "}
            <Link to="/products">
              <b>products</b>
            </Link>{" "}
            <Link>
              <i>{product.name}</i>
            </Link>{" "}
          </p>
        </div>
        <div className="single-product-details">
          <div className="single-product-image">
            <img src={image} alt="" />
          </div>
          <hr />
          <div className="single-product-name">
            <h1>{product.title}</h1>
          </div>
          <div className="single-product-details-detail">
            <input type="number" name="" id="" />
            <button className="cart" onClick={()=>(!token?registerRedirect():toast.success("Added to cart"))}>Add to cart</button>
            <button className="buy" onClick={()=>(!token?registerRedirect():toast.success("Added to cart")&&navigate('/checkout'))}>Buy Now</button>
          </div>
          <div className="single-product-description">
            <h1>Description</h1>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      <div className="best-seller">
        <h2>You Might Also Like</h2>
        <hr />
        <div className="bestseller-product">
          {products.map((prod, index) => (
            <Product
              key={index}
              index={prod._id}
              image={prod.images[0]}
              name={prod.title}
              description={prod.description}
              price={prod.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
