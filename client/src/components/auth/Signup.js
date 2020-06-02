import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import '../style/login.css';

import { useForm } from "react-hook-form";
import Axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Signup = () => {
  const { register, handleSubmit, errors } = useForm();
  const [err, setErr] = useState(null);
  const history = useHistory();
  const { setAuth } = useContext(AuthContext);

  const signupHandler = async (formData) => {
    const url = "http://localhost:5050/user/register";
    const config = { headers: { "Content-Type": "application/json" } };
    const body = JSON.stringify(formData);
    const res = await Axios.post(url, body, config);
    if (res.data.error) setErr(res.data.error);
    else {
      setAuth(res.data);
      history.push("/createproduct");
    }
  };


  return (
      <div className="container login-container">
      <div className="row">
      <div className="col">
            </div>
            <div className="col login-form-1">
      <h2>Signup</h2>

      <form onSubmit={handleSubmit(signupHandler)}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control"
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
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="form-control"
          ref={register({
            required: true,
            pattern: {
              value: /^(?=.*\d)(?=.*[a-zA-Z]).{5,}$/,
            },
          })}
        />
        {errors.password && (
          <small>* Minimum 5 alpha numberic charecters </small>
        )}
        </div>

        <div className="form-group">
        <button className="cancelbtn btnSubmit">Signup</button>
        </div>

      </form>
      </div>
      <div className="col">
    </div>
      </div>
      </div>
  );
};
export default Signup;
