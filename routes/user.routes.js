const UserController = require("../controllers/user.controllers")
const express = require('express')
const verifToken = require("../utils/verifToken")
const router = express.Router()

router.post("/register", UserController.registerUser)
router.post("/login", UserController.loginUser)

module.exports = router