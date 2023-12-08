const React = require('react')
const Default = require('./layouts/default')

function Index ({ places }) {
    return (
        <Default>
            <main>
                <h1>Index Page</h1>
            </main>
        </Default>
    )
}

module.exports = Index