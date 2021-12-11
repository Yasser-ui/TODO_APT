const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const blogsRoute = require("./routes/blog.routes")
const userRoute = require('./routes/user.routes')

mongoose.connect('mongodb://localhost:27017/todoAPT').then(() => {
    console.log("Mongo Connected ...")
})
.catch((err) => {
    console.log("error", err.message)
})

const app = express()
app.use(bodyParser.json())
app.use("/blog", blogsRoute)
app.use("/user", userRoute)
app.listen("3500", () => {
console.log("app is running in port 3500");
});