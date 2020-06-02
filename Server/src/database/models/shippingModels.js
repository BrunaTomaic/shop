const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shippingSchema = new Schema({
  name: { type: String, required: true },
  email: { type: Number, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },

  owner_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Shipping", shippingSchema);
