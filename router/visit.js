const express = require('express')
const Park = require('../models/Park')
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

router.put('/visits/:id', async (req, res) =>  {
    const newDoc = req.body
    await Visit.findByIdAndUpdate(req.params.id, newDoc, (err, doc) => {
        if(err) {
            console.error("Failed to find visit: ", err)
            return res.json({})
        } 
        // const park = await Park.findById(newDoc.parkId)
        // park.count = park.count + 1
        // await Park.findByIdAndUpdate(newDoc.parkId, park)
        return res.json(newDoc)
    })
})

// cleaner route. Deletes unwanted visits
router.delete('/visits', async (req, res) => {
    await Visit.deleteMany({ driverId: undefined })
    return res.json(await Visit.find({}))
})


// export visit-router
module.exports = router
