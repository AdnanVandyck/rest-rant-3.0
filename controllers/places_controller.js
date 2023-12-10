const express = require('express')
const places = express.Router()
const Place = require('../models/place.js')


// CREATE
places.post('/', (req, res) => {
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
        req.body.city = 'Anytown'
      }
      if (!req.body.state) {
        req.body.state = 'USA'
      } 
    Place.push(req.body)
    res.redirect('/places')
})



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