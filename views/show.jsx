const React = require('react')
const Default = require('./layouts/default')

function Show ({place}) {
    console.log(place.name)
    return (
        <Default>
            <h1>{ place.name }</h1>
            <img src={place.image} about={place.name} />
        </Default>
    )
}

module.exports = Show
