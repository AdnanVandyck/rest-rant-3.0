const express = require('express')
const places = express.Router()
const Place = require('../models/place.js')


//INDEX
places.get('/', (req,res) => {
    res.render('index', 
    {
        places: Place
    }
    )
})

//NEW
places.get('/new', (req, res) => {
    res.render('new', {

    })
  })



// SHOW(READ)
places.get('/:arrayIndex', (req, res) => {
    res.send(Place[req.params.arrayIndex])
})

module.exports = places