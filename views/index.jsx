const React = require('react')
const Default = require('./layouts/default')

function Index (data) {
 const styles = {
    curve: {
        borderRadius: "25px",
        padding: "20px",
        width: "75%",
        height: "500px",
    },
 }   
 let placesFormatted = data.places.map((place) => {
    return (
        <div className='col-sm-6'>
            <h2>{place.name}</h2>
            <p>
                {place.cuisines}
            </p>
            <img className="curve" style={styles.curve} src={place.pic} alt={place.name}/>
            <p>
                Located in {place.city}, {place.state}
            </p>
        </div>
    )
 })       
    return (
        <Default>
            <main>
                <h1>GET YOUR EAT ON!</h1>
                <h1>Places to Rant and Rave About</h1>
                <div className='row'>
                {placesFormatted}
                </div>
                
            </main>
        </Default>
    )
}

module.exports = Index