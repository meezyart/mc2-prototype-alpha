const React = require('react')
const data = require('../public/mock-data')
const { Link } = require('react-router')

const Gaurdians = () => (
  <div id="gaurdiansPage" className="is-hidden" pageItem>
    <div className="page-banner gaurdians-banner"><span></span>gaurdians</div>
    <section className="gaurdian-buttons">
      {data.gaurdians.map((gaurdian) => (
        <Link to='/gaurdians-detail' className="gaurdian-buttons__gaurdian-button" key={gaurdian.id} view-path="gaurdianDetails" navbutton>
          <div className="gaurdian-buttons__profile-picture" style={{backgroundImage: gaurdian.profilePicture}}></div>
          <div className="gaurdian-buttons__gaurdian-name">{gaurdian.firstName} {gaurdian.lastName}</div>
          <div className="gaurdian-buttons__gaurdian-title">{gaurdian.gaurdianStatus}</div>
        </Link>
      ))}
    </section>
    <div className="gaurdian-buttons__gaurdian-button" navbutton>
      <div className="gaurdian-buttons__profile-picture add-more"></div>
      <div className="gaurdian-buttons__gaurdian-name">Add a Gaurdian</div>
    </div>
  </div>
)

module.exports = Gaurdians
