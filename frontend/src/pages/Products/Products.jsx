import React from "react";
import "./Products.css";
import { assets, products } from "../../assets/assets";
import Product from "../../components/Product/Product";

const Products = () => {
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
            <h5>All Products</h5>
          </div>
          <div className="product-1">
            <h5>Kenya AA</h5>
          </div>
          <div className="product-2">
            <h5>Kenya Expresso</h5>
          </div>
          <div className="product-3">
            <h5>Instant Coffee</h5>
          </div>
        </div>
      </div>
      <div className="products-products-container">
        {products.map((product, index) => (
          <div key={index} className="prod-container">
            <Product
              index={index}  
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>

      <div className="products-footer">
        <h1>Prices are subject to change. Terms and conditions apply</h1>
      </div>
    </>
  );
};

export default Products;
