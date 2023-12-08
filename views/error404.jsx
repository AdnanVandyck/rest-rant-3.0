const React = require('react')
const Default = require('./layouts/default')

function error404 () {
    return (
      <Default>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                    <img src="images/iron-man-404.jpg" alt="Ironman 404" />
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@duongtrungthinh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Duong Thinh</a> on <a href="https://unsplash.com/photos/man-in-red-and-black-suit-isObWnZOtJk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
          </main>
      </Default>
    )
  }
  

module.exports = error404
