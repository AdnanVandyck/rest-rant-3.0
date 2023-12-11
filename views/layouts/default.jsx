const React = require('react')

function Default (html) {
    return (
        <html>
            <head>

            <title>{html.title || 'Default'}</title>
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" /> */}
                {/* <title>REST-RANT</title> */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="style.css"/>
            </head>
            <body>
                <div className="wrapper">
                    <header>
                    <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>   
                        </li>
                        <li>
                        <a href="/places">Places</a>
                        </li>
                        <li>
                        <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                    </header>
                <div className="container">
                {html.children}
                </div>

                </div>

            </body>

        </html>
    )
}

module.exports = Default