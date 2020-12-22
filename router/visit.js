const express = require('express')
const router = express.Router()
const Visit = require('../models/Visit')


// get all visits
router.get('/visits', async (_req, res) => {
    const visits = await Visit.find({})
    return res.json(visits)
})


// save a visit
router.post('/visits', async (req, res) => {
    const visit = await Visit.create(req.body)
    console.log(visit)
    return res.json(visit)
})


// export visit-router
module.exports = router
