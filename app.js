require("dotenv").config()
const express = require("express")
const connectToDB = require("./config/db")
const app = express()
const userRoutes = require("./routes/userRoutes")
const cors = require("cors")


//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors());

connectToDB()
app.use("/", userRoutes)

module.exports = app