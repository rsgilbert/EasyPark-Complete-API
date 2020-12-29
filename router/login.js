const express = require('express')
const router = express.Router()
const Park = require('../models/Park')
const Driver = require('../models/Driver')

const { status } = require('./utils')

/**
 * Signing in a park.
 * A park's email is matched with their password in the park collection.
 * The password is checked from the park model. If it is correct, isMatch = true
 */

router.post('/parklogin', async (req, res) => {
    const { email, password } = req.body
    console.log(email)
    console.log(password)
    let park = await Park.findOne({ email: email, password: password })
    if(park) { 
        return res.json(park)
    } else {
        return res.status(status.NOT_FOUND).end()
    }
})




router.post('/driverlogin', async (req, res) => {
    const { email, password } = req.body
    let driver = await Driver.findOne({ email, password })
    if(driver) { 
        return res.json(driver)
    } else {
        return res.status(status.NOT_FOUND).end()
    }
})


module.exports = router

