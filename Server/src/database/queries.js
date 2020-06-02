const User = require("./models/userModel");
const Product = require("./models/productModels");

module.exports = {
  getUserByEmail: async (email) => await User.findOne({ email }),

  getOneUser: async (id) => await User.findOne({ _id: id }),

  createUser: async (data) => {
    const user = await new User({ ...data });
    return await user.save();
  },

  getAllProducts: async () => await Product.find(),

  getOneProduct: async (id) => await Product.findOne({ _id: id }),

  createProduct: async (data) => {
    const product = await new Product({ ...data });
    return await product.save();
  },

};
