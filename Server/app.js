const express = require("express");
const cors = require("cors");
const expressFileupload = require("express-fileupload");
const connectDB = require("./src/database/connection");
const productRoutes = require("./src/API/routes/productRoutes");
const userRoutes = require("./src/API/routes/userRoutes");
const contactRoute = require("./src/API/routes/contactRoutes");

const app = express();

// connection database
connectDB();

// middlewares
app.use(express.json());
app.use(expressFileupload());
app.use(express.static("src/images")); // for the images to load in client
app.use(cors());

// routes
app.use("/product", productRoutes);
app.use("/user", userRoutes);
app.use(contactRoute);

module.exports = app;
