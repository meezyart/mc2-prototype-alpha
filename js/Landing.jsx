const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div id="profilePage" className="is-hidden" pageItem>
    <div className="profile-buttons">
      <Link to='/gaurdians' className="profile-button" view-path="gaurdiansPage" navbutton>
        <div className="profile-icon gaurdians"></div>
        <div className="icon-name">Gaurdians</div>
      </Link>
      <div className="profile-button" view-path="childrenPage" navbutton>
        <div className="profile-icon children"></div>
        <div className="icon-name">Children</div>
      </div>
      <div className="profile-button" view-path="hostPage" navbutton>
        <div className="profile-icon hosts"></div>
        <div className="icon-name">Become a Host</div>
      </div>
      <div className="profile-button" view-path="gaurdiansPage" navbutton>
        <div className="profile-icon browse-hosts"></div>
        <div className="icon-name">Browse Hosts</div>
      </div>
    </div>
  </div>
)

module.exports = Landing
