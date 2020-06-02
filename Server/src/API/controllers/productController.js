const {
  getAllProductsService,
  getOneProductService,
  createProductService,
} = require("../../services/productService");

module.exports.getAllProductsController = async (req, res) => {
  try {
    const result = await getAllProductsService();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports.getOneProductController = async (req, res) => {
  try {
    const result = await getOneProductService(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports.createProductController = async (req, res) => {
  try {
    if (req.err) throw new Error(req.err);
    const productData = { ...req.body, owner_id: req.owner_id };
    const { images } = req.files;

    const result = await createProductService(productData, images);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }

}
