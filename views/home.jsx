const React = require('react')
const Default = require('./layouts/default')

function home () {
    return (
        <Default>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="images/bbq-plate.jpg" alt="BBQ Plate" />
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@victoriakosmo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Victoria Shes</a> on <a href="https://unsplash.com/photos/grilled-meat-and-vegetable-on-the-table-UC0HZdUitWY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Default>
    )
}

module.exports = home