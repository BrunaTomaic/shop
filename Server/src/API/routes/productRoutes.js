const router = require("express").Router();
const { authorization } = require("../../middleware/authorization");
const {
  createProductController,
  getAllProductsController,
  getOneProductController,
} = require("../controllers/ProductController");

router.get("/", getAllProductsController);

router.get("/:id", getOneProductController);

router.post("/createproduct", authorization, createProductController);

module.exports = router;
