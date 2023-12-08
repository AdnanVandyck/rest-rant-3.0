const React = require('react')

function Default (html) {
    return (
        <html>
            <head>
                <title>REST-RANT</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="style.css"/>
            </head>
            <body>
                {html.children}
            </body>

        </html>
    )
}

module.exports = Default