require("dotenv").config()
const express = require("express")
const connectToDB = require("./config/db")
const app = express()
const userRoutes = require("./routes/userRoutes")


//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

connectToDB()
app.use("/", userRoutes)

module.exports = app