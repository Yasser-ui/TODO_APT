const express = require("express")
const blogController = require("../controllers/blog.controllers")
const verifToken = require("../utils/verfiToken")
const router = express.Router()

router.post("/add",verfiToken, blogController.addNewBlog)
router.get("/",verfiToken, blogController.getAllBlogs)
router.delete("/remove/:id", verifToken, blogController.deleteBlog)

module.exports = router