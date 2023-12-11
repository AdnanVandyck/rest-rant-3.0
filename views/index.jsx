const React = require('react')
const Default = require('./layouts/default')

function Index({ places, title}) {
    return (
      <Default title={title}>
        <h1>Get Your Eat On!</h1>
        <h1>Places to Rant and Rave About!</h1>
        <ul>
        {places.map((place, index) => {
            return (
                <li key={index}>
                    <div className="col-sm-6">
                    <div className="row">
                    <h2>
                    <a href={`/places/${index}`}>{place.name}</a>
                    </h2>
                    <p>
                        {place.cuisines}
                    </p>
                    <img src={place.pic} alt={place.name}/>
                    <p>
                        Located in {place.city}, {place.state}
                    </p>
                    </div>
                </div>
                </li>
                
            );
          })}
        </ul>
          

      </Default>
    );
  }


module.exports = Index