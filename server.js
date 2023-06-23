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

// CONTROLLER MIDDLEWARE
const placesController = require('./controllers/places_controller')
app.use('/places', placesController)

// ROUTES

//HOME PAGE
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})




// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})