const React = require('react')
const Default = require('./layouts/default')

function Index (data) {
 let placesFormatted = data.places.map((place) => {
    return (
        <div className='col-sm-6'>
            <h2>{place.name}</h2>
            <p>
                {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name}/>
            <p>
                Located in {place.city}, {place.state}
            </p>
        </div>
    )
 })       
    return (
        <Default>
            <main>
                <h1>GET YOUR EAT ON!!!</h1>
                <div className='row'>
                {placesFormatted}
                </div>
                
            </main>
        </Default>
    )
}

module.exports = Index