const express = require('express')
const router = express.Router()
const Driver = require('../models/Driver')


// get all drivers
router.get('/drivers', async (_req, res) => {
    const drivers = await Driver.find({})
    return res.json(drivers)
})


// save a visit
router.post('/drivers', async (req, res) => {
    const driver = await Driver.create(req.body)
    console.log(driver)
    return res.json(driver)
})


// export driver-router
module.exports = router
