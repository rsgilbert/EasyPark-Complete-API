const mongoose = require('mongoose')

const visitSchema = mongoose.Schema({
    parkId: String,
    start: Number,
    end: Number,
    arrived: Boolean,
    departed: Boolean,
    parkName: String,
    driverId: String
})


module.exports = mongoose.model("Visit", visitSchema)
