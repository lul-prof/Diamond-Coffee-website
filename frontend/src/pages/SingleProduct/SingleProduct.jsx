import React from "react";
import "./SingleProduct.css";
import { Link, useParams } from "react-router-dom";
import { products } from "../../assets/assets";
import Product from "../../components/Product/Product";

const SingleProduct = () => {
  const { id } = useParams();
  const product = products[id];
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
            <img src={product.image} alt="" />
          </div>
          <hr />
          <div className="single-product-name">
            <h1>{product.name}</h1>
          </div>
          <div className="single-product-details-detail">
            <input type="number" name="" id="" />
            <button className="cart">Add to cart</button>
            <button className="buy">Buy Now</button>
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
          {products.map((prod, index) =>
            prod.bestseller ? (
              <Product
                index={index}
                image={prod.image}
                name={prod.name}
                price={prod.price}
              />
            ) : (
              <></>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
