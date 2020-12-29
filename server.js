const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()
mongoose.connect(process.env.MONGODB_URI)
// mongoose.connect(process.env.MONGODB_ATLAS_URI)
app.listen(process.env.PORT, 
    () => `App is running on port ${process.env.PORT}`)
