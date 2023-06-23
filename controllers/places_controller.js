const express = require('express')
const places = express.Router()
const Place = require('../models/place')

//INDEX
places.get('/', (req,res) => {
    res.send(Place)
})

// SHOW(READ)
places.get('/:arrayIndex', (req, res) => {
    res.send(Place[req.params.arrayIndex])
})

module.exports = places