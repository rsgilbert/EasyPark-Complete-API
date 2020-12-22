const mongoose = require('mongoose')

const visitSchema = mongoose.Schema({
    parkId: String,
    numberplate: String,
    start: Number,
    end: Number,
    complete: Boolean
})


module.exports = mongoose.model("Visit", visitSchema)
