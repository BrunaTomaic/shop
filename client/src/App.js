import React, { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Products from "./components/layout/Products";
import CreateProduct from "./components/auth/CreateProduct";
import Login from "./components/auth/Login";
import Product from "./components/layout/Product";
import Navbar from "./components/layout/Navbar";
import Profile from "./components/layout/Profile";
import Contact from './components/layout/Contact';
import MapContainer from './components/layout/Map';

// import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/createproduct" component={CreateProduct} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/map" component={MapContainer} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
