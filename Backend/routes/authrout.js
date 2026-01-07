const { signup } = require("../controllers/authcontrollers")
const { signupvalidation } = require("../middlewear/authvalidation")


const router = require("express").Router()
router.post(`login`,(req,res)=>{
    res.send("login success")
})
router.post("/signup",signupvalidation,signup)
module.exports = router