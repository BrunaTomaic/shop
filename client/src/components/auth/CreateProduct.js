import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import '../style/login.css';

const CreateProduct = () => {
  const { register, handleSubmit, errors } = useForm();
  const [images, setImages] = useState([]);
  const [feedback, setFeedback] = useState(undefined);

  const onChange = (e) => setImages(images.concat(e.target.files[0]));

  const submitHandler = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    images.map((image) => formData.append(`images`, image));

    const url = "http://localhost:5050/product/createproduct";
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

  const handleCreateProduct = () => {
    setFeedback(undefined);
  };

  return (
    <div className="container login-container">
      <div className="row">
      <div className="col">
            </div>
            <div className="col login-form-1">
      <h2>Create Product</h2>
      {feedback ? (
        <div>
          <h4>{feedback}</h4>
          <button onClick={handleCreateProduct}>Create new product</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Title"
            ref={register({
              required: "* Title must be minimum 2 charecters",
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
            name="price"
            placeholder="price"
            ref={register({
              required: true,
              minLength: 2,
              pattern: { value: /^[0-9]*$/ },
            })}
          />
          {errors.price && <small>* price must be minimum 2 degits. </small>}
          </div>

          <div className="form-group">
          <input
            type="text"
            name="description"
            placeholder="Description"
            ref={register({
              required: true,
              minLength: 5,
              pattern: { value: /^[a-zA-Z\s]+$/ },
            })}
          />
          {errors.description && <small>* Incorrect description. </small>}
          </div>

          <div className="form-group">
          <input
            type="file"
            name="image1"
            placeholder="browse image"
            onChange={onChange}
            ref={register({ required: true })}
          />
          {errors.image && <small>* Please choose image. </small>}
          </div>

          <div className="form-group">
          <input
            type="file"
            name="image2"
            placeholder="browse image"
            onChange={onChange}
            ref={register({ required: true })}
          />
          {errors.image && <small>* Please choose image. </small>}
          </div>

          <div className="form-group">
          <button className="cancelbtn btnSubmit">Create</button>
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

export default CreateProduct;
