const mongoose = require("mongoose")

const Schema = mongoose.Schema

const studentSchema = new Schema({
    firstName: String, 
    lastName: String,
    email: String,
    phone: String,
    listOfTech: []
})

const model = mongoose.model("register", studentSchema)

module.exports = model