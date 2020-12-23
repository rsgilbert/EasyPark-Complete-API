const mongoose = require('mongoose')

const parkSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    tel: String,
    lat: Number,
    lng: Number,
    picture: String
})


module.exports = mongoose.model("Park", parkSchema)
