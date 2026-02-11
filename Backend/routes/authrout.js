const { signup, login } = require("../controllers/authcontrollers");
const { signupvalidation, loginvalidation } = require("../middlewear/authvalidation");

const router = require("express").Router();

router.post("/login",loginvalidation, login);
router.post("/signup", signupvalidation, signup);


module.exports = router;
