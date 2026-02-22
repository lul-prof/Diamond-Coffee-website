import React, { useState } from "react";
import "./Products.css";
import { assets } from "../../assets/assets";
import Product from "../../components/Product/Product";
import { toast } from 'react-toastify';
import axios from 'axios'
import { useEffect } from "react";


const Products = () => {
  const [searched,setSearched]=useState("");
  const [products,setProducts]=useState([]);
  //const [loading,setLoading]=useState(false);

  const backend_url=import.meta.env.VITE_BACKEND_URI;

  
  
  const searchProduct=async()=>{
      try {
        const resp=await axios.get(`${backend_url}/api/user/search?query=${searched}`);
        if(resp.data.success){
          console.log(resp.data)
          setProducts(resp.data.results);
        }
        
      } catch (error) {
        console.log(error)
        toast.error(error.message)  
      }
    }
 


  useEffect(()=>{
    const fetchProducts=async()=>{
    try {
      const response=await axios.get(`${backend_url}/api/user/products`);
      console.log(response);
      if(response.data.success){
        setProducts(response.data.products);
      }
      else{
        toast.error(response.data.message);
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
    
  }
  fetchProducts();


  },[backend_url])


  return (
    <>
      <div className="products-container">
        <div className="est-container">Est 1990</div>
        <div className="product-image">
          <img src={assets.Product10} alt="" />
        </div>
        <div className="products-header">
          <h2>Our shop</h2>
          <h3>Kenya's Finest Coffee</h3>
          <p>
            At Diamond Coffee Company, We only bring the best to the market.
          </p>
        </div>

        <div className="products-category">
          <div className="all-products">
            <h5 onClick={()=>{searchProduct();setSearched("");}}>All Products</h5>
          </div>
          <div className="product-1">
            <h5 onClick={()=>{searchProduct();setSearched("espresso");}}>Kenya AA</h5>
          </div>
          <div className="product-2">
            <h5 onClick={()=>{searchProduct();setSearched("bean");}}>Kenya Expresso</h5>
          </div>
          <div className="product-3">
            <h5 onClick={()=>{setSearched("200");searchProduct();}}>Instant Coffee</h5>
          </div>
        </div>
      </div>
      {
      searched===""?

    <>
      <div className="products-products-container">
        {products.map((product, index) => (
          <div key={index} className="prod-container">
            <Product
              index={product._id} 
              image={product.images[0]}
              name={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>
      </>
      :
      <>

        {
          products.length===0?
          <>
          <div style={{marginLeft:"20px",marginTop:"20px"}}>
            <h5>{searched} not found</h5>
          </div>
          </>
          :
          <div className="products-products-container">
          {products.map((product, index) => (
            <div key={index} className="prod-container">
              <Product
                index={index} 
                image={product.images[0]}
                name={product.title}
                price={product.price}
              />
            </div>
          ))}
        </div>
        }

      </>
      }

      <div className="products-footer">
        <h1>Prices are subject to change. Terms and conditions apply</h1>
      </div>

      
    </>
  );
};

export default Products;
