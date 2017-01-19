const React = require('react')

class Header extends React.Component {

  render () {
    return (
      <div className="header">

        <div className="header__logo header--button"><img src="images/logo.jpg" /></div>

        <div className="header__home-btn header--button" view-path="profilePage" headerbutton>
          <img src="images/home-btn.jpg" />
        </div>

        <div className="header__friends-btn header--button">
          <img src="images/friends-btn.jpg" />
          <div className="header__items-pending-count">10</div>
        </div>

        <div className="header__notifications-btn header--button">
          <img src="images/notifications-btn.jpg" />
          <div className="header__items-pending-count is-hidden"></div>
        </div>

        <div className="header__additional-options-btn header--button">
          <img src="images/header-btn.jpg" />
        </div>
      </div>
    )
  }
}

module.exports = Header
