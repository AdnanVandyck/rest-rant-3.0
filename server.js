// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES

//LANDING PAGE
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Restaurants')
})

//PLACES
const placesController = require('./controllers/places_controller')
app.use('/places', placesController)

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})