const express = require('express')
const router = express.Router()
const signup = require('./signup')
const login = require('./login')
const driver = require('./driver')
const park = require('./park')
const visit = require('./visit')



router.get('/', (_, res) => {
    return res.redirect('/test')
})

router.get('/test', (_, res) => {
    return res.json("Test Successful")
})


router.use(signup)
router.use(login)
router.use(visit)
router.use(park)
router.use(driver)


module.exports = router

