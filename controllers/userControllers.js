// logic, BL

const User = require("../models/userModel")

exports.home = (req, res) => {
    res.send("Hello Alpha")
}

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body
        // To check whether the user has entered all the details
        if (!name || !email) {
            throw new Error("Name and email are required")
        }
        const userExists = await User.findOne({ email })
        if (userExists) {
            throw new Error("Email already exists")
        }

        // Inserting into the database
        const user = await User.create({ name, email })
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })

    } catch (error) {
        console.log(error);
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}

exports.editUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: "User updated successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true, 
            message: "User deleted successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}