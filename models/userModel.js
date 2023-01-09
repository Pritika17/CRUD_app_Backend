const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
        trim: true,
        maxlength: [50, "Name must be 50 character long" ]
    },

    email: {
        type: String,
        require: [true, "Email is reuired"],
        unique: true
    }
})

module.exports = mongoose.model("User", userSchema)