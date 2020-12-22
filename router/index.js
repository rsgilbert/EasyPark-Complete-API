const express = require('express')
const router = express.Router()
const signup = require('./signup')
const login = require('./login')
const fs = require('fs')
const path = require('path')

router.get('/', (_, res) => {
    return res.redirect('/test')
})

router.get('/test', (_, res) => {
    return res.json("Test Successful")
})

router.get('/direction', (req, res) => {
    const p = path.join(__dirname, 'api-directions-response.json')
    const json = JSON.parse(fs.readFileSync(p).toString())
    res.json(json)
})

router.use(signup)
router.use(login)


module.exports = router

