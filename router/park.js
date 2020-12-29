const express = require('express')
const router = express.Router()
const Park = require('../models/Park')


// get all parks
router.get('/parks', async (_req, res) => {
    const parks = await Park.find({})
    return res.json(parks)
})


// save a park
router.post('/parks', async (req, res) => {
    const park = await Park.create(req.body)
    console.log(park)
    return res.json(park)
})


// cleaner route. Deletes unwanted parks
// router.delete('/parks', async (req, res) => {
//     await Park.deleteMany({ email: undefined })
//     return res.json(await Park.find({}))
// })

// export park-router
module.exports = router
