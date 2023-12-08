// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// // CONTROLLER MIDDLEWARE
// Places
const placesController = require('./controllers/places_controller.js')
app.use('/places', placesController)

// ROUTES

//HOMEPAGE
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Restaurants!')
})

app.get('*', (req, res) => {
    res.render('error404')
})





// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})