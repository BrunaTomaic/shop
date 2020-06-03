const Query = require("../database/queries");
const helperMethods = require("../helpers");

module.exports.getAllProductsService = async () => {
  try {
    const results = await Query.getAllProducts();
    return results;
  } catch (error) {
    console.log("ErrorIn: getAllProductsService :", error);
    return error.message;
  }
};

module.exports.getOneProductService = async (id) => {
  try {
    const results = await Query.getOneProduct(id);
    return results;
  } catch (error) {
    console.log("ErrorIn: getOneProductService :", error);
    return error.message;
  }
};

module.exports.createProductService = async (productData, images) => {
  try {
    productData.images = images.map((image) => {
      const imageName = helperMethods.getImageName(image);
      helperMethods.moveImage(image, imageName);
      let imageLink = helperMethods.createImageLink(imageName);
      return { imageLink };
    });
    const results = await Query.createProduct(productData);
    return { message: "product profile created successfully", productData: results };
  } catch (error) {
    console.log("ErrorIn: CreateProductService :", error);
    return error.message;
  }
};

module.exports.shippingProductService = async (shippingData) => {
  try {
    const results = await Query.shippingProduct(shippingData);
    return { message: "shipping profile created successfully", shippingData: results };
  } catch (error) {
    console.log("ErrorIn: ShippingProductService :", error);
    return error.message;
  }
};
