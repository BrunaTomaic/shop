const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shippingSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },

  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Shipping", shippingSchema);
