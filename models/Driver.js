const mongoose = require('mongoose')

const driverSchema = mongoose.Schema({
    email: String,
    password: String
})


module.exports = mongoose.model("Driver", driverSchema)
