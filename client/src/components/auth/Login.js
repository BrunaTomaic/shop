import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import '../style/login.css';

import { useForm } from "react-hook-form"; // library for frontend validation
import Axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const [err, setErr] = useState(null);
  const { setAuth } = useContext(AuthContext);

  const loginHandler = async (formData) => {
    const url = "http://localhost:5050/user/login";
    const config = { headers: { "Content-Type": "application/json" } };
    const body = JSON.stringify(formData);
    const res = await Axios.post(url, body, config);
    if (res.data.error) setErr(res.data.error);
    else {
      //localStorage.setItem("token", res.data.token);
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
      <h2>Login</h2>
      {err && <div style={{ color: "#bb0000" }}>{err}</div>}
      <form onSubmit={handleSubmit(loginHandler)}>
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
        <button className="cancelbtn btnSubmit">Login</button>
        </div>
      </form>
      </div>
      <div className="col">
    </div>
      </div>
    </div>
  );
};

export default Login;
