const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const postroute = require('./Route/user.route.js')
const cors = require('cors')
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err)
  })
app.use(cors())
app.use(express.json())

app.use('/api/v2/user', postroute)

app.listen('8000', () => {
  console.log('I am listening')
})
