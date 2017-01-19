const React = require('react')
const { Link } = require('react-router')

class Header extends React.Component {
  render () {
    return (
      <div className="header">

        <div className="header__logo header--button"><img src="public/images/logo.jpg" /></div>

        <Link to="/" className="header__home-btn header--button" view-path="profilePage" headerbutton>
          <img src="public/images/home-btn.jpg" />
        </Link>

        <div className="header__friends-btn header--button">
          <img src="public/images/friends-btn.jpg" />
          <div className="header__items-pending-count">10</div>
        </div>

        <div className="header__notifications-btn header--button">
          <img src="public/images/notifications-btn.jpg" />
          <div className="header__items-pending-count is-hidden"></div>
        </div>

        <div className="header__additional-options-btn header--button">
          <img src="public/images/nav-btn.jpg" />
        </div>
      </div>
    )
  }
}

module.exports = Header
