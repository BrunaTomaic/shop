import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import '../style/card.css'

const Product = () => {
  const [product, setProduct] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      const url = `http://localhost:5050/product/${id}`;
      const res = await Axios.get(url);
      setProduct(res.data);
    }
    fetchProduct();
  }, []);

  console.log(product);

  return (
    <>
      {product ? (
        <div className="container ">
        <div className="row">
        <div className="col">
              </div>
        <div className="col"> 
        <h1>Happy buying</h1>
        <div className="card card-style">
          <img className="card-img-top" src={product.images[0].imageLink} alt="img" />
          <h3 className="card-title">{product.name}</h3>
          <div className="card-body">
          <p className="card-text">{product.price} kn</p>
          <p className="card-text">{product.description}</p>
          
          <button className="btn btn-primary">Buy</button>
          </div>
          </div>
        </div>
        <div className="col">
              </div>
        </div>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
};

export default Product;
