const React = require('react')
const Default = require('./layouts/default')

function New () {
   
    return (
        <Default>
            <main>
                <h1>Add a New Place</h1>
                <form method= "POST" action="/places">
                    <div>
                        <label htmlFor="name">Place Name</label>
                        <input id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="pic">Place Picture</label>
                        <input type="url" id="pic" name="pic" />
                    </div>
                    <div>
                        <label htmlFor="city">Place City</label>
                        <input id="city" name="city" />
                    </div>
                    <div>
                        <label htmlFor="state">Place State</label>
                        <input id="state" name="state" />
                    </div>
                    <div>
                        <label htmlFor="cuisines">Place Cuisines</label>
                        <input id="cuisines" name="cuisines" required/>
                    </div>
                    <input type="submit" value="Add Place" />
                </form>
            </main>
        </Default>
    )
}

module.exports = New 