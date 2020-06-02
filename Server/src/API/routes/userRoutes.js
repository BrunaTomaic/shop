const router = require("express").Router();
const {
  registerValidationFields,
  loginValidationFields,
} = require("../../helpers");
const {
  loginController,
  registerController,
  getOneUserController,
} = require("../controllers/userControllers");

// ####################################################################

router.post("/login", loginValidationFields, loginController);

router.post("/register", registerValidationFields, registerController);

router.get("/:id", getOneUserController);

module.exports = router;
