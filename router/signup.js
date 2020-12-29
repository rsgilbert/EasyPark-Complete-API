const express = require('express')
const router = express.Router()
const Driver = require('../models/Driver')
const Park = require('../models/Park')
const { status } = require('./utils')

router.post('/parksignup', async (req, res) => {
    const { email } = req.body
    let park = await Park.findOne({ email })
    if(park) {
        return res.status(status.CONFLICT).end()
    }
    else {
        park = req.body
        const newPark = await Park.create(req.body)
        console.log(newPark)
        return res.json(newPark)
    } 
})


router.post('/driversignup', async (req, res) => {
    const { email } = req.body
    let driver = await Driver.findOne({ email })
    if(driver) {
        return res.status(status.CONFLICT).end()
    }
    else {
        driver = req.body
        const newDriver = await Driver.create(req.body)
        console.log(newDriver)
        return res.json(newDriver)
    } 
})



module.exports = router

