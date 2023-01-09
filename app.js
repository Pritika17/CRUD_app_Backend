require("dotenv").config()
const express = require("express")
const connectToDB = require("./config/db")
const app = express()
const userRoutes = require("./routes/userRoutes")


//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectToDB()
app.use("/", userRoutes)

module.exports = app