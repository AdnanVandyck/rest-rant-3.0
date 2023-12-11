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
        places: Place,
        title: 'Index Page'
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
    if (Place[req.params.arrayIndex]) {
        res.render('Show', {
            place: Place[req.params.arrayIndex]
        })
    } else {
        res.send('error404')
    }
})

module.exports = places