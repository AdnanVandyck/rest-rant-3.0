const React = require('react')
const Default = require('./layouts/default')

function index () {
    return (
        <Default>
            <main>
                <h1>Index Page</h1>
            </main>
        </Default>
    )
}

module.exports = index