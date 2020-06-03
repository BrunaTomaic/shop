import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";
//import '../style/login.css';

const ShippingProduct = () => {
  const { register, handleSubmit, errors } = useForm();
  const [feedback, setFeedback] = useState(undefined);
  const [product, setProduct] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      const url = `http://localhost:5050/product/${id}`;
      const res = await axios.get(url);
      setProduct(res.data);
    }
    fetchProduct();
  }, []);

  const submitHandler = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("state", data.state);
    formData.append("country", data.country);

    const url = "http://localhost:5050/product/shippingproduct";
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "auth-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.post(url, formData, config);
    console.log(res.data);
    if (res.data.message) setFeedback(res.data.message);
  };

  const handleShippingProduct = () => {
    setFeedback(undefined);
  };

  return (
    <div className="container login-container">
      <div className="row">
      <div className="col">
            </div>
            <div className="col login-form-1">
      <h2>Shipping Product</h2>

      {product && (
        <div className="card card-style">
          <img className="card-img-top" src={product.images[0].imageLink} alt="img" />
          <h3 className="card-title">{product.name}</h3>
          <div className="card-body">
          <p className="card-text">{product.price} kn</p>
          <p className="card-text">{product.description}</p>
          </div>
          </div>
          
      )}
      {feedback ? (
        <div>
          <h4>{feedback}</h4>
          <button onClick={handleShippingProduct}>Ship product</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            ref={register({
              required: "* Name must be minimum 2 charecters",
              minLength: 3,
              pattern: { value: /^[a-zA-Z\s]+$/ },
            })}
          />
          {errors.name && (
            <small className="err-msg">{errors.name.message}</small>
          )}
          </div>

          <div className="form-group">
          <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          className="form-control"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            },
          })}
        />
        {errors.email && <small>* Invalid email address </small>}
          </div>

          <div className="form-group">
          <input
            type="text"
            name="state"
            placeholder="State"
            ref={register({
              required: "* State must be minimum 2 charecters",
              minLength: 3,
              pattern: { value: /^[a-zA-Z\s]+$/ },
            })}
          />
          {errors.state && (
            <small className="err-msg">{errors.state.message}</small>
          )}
          </div>

          <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="Country"
            ref={register({
              required: "* Country must be minimum 2 charecters",
              minLength: 3,
              pattern: { value: /^[a-zA-Z\s]+$/ },
            })}
          />
          {errors.country && (
            <small className="err-msg">{errors.country.message}</small>
          )}
          </div>

          <div className="form-group">
          <button className="cancelbtn btnSubmit">Ship</button>
          </div>
        </form>
      )}
    </div>
      <div className="col">
    </div>
      </div>
    </div>
  );
};

export default ShippingProduct;
