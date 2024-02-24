const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/test");

connect.then(() => {
    console.log("Database Connected successfully");
})
    .catch(() => {
        console.log("Database Connected unsuccessfully");
    })

// UserSchema
const signupSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// Model
const User = new mongoose.model("users", signupSchema)  //Two arguements modelName and schema

module.exports = User;