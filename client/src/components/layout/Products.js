import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchAllProducts() {
      const res = await axios.get("http://localhost:5050/product/");
      setProducts(res.data);
    }

    fetchAllProducts();
  }, []);

  return (
    <div className="container ">
        <div className="row">
        <div className="col">
              </div>
    <div className="col">
      <h1>All Products</h1>
      {products.map((product) => (
        <Link key={product._id} to={`/product/${product._id}`}>
          <div className="card card-style">
          <img className="card-img-top" src={product.images[0].imageLink} alt="img" />
          <h3 className="card-title">{product.name}</h3>
          <div className="card-body">
          <p className="card-text">{product.price} kn</p>
          <p className="card-text">{product.description}</p>
          </div>
          </div>
        </Link>
      ))}
    </div>
    <div className="col">
              </div>
        </div>
        </div>
  );
};

export default Products;
