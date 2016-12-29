const React = require('react')
const data2 = require('../public/mock-data')
const { Link } = require('react-router')

const Gaurdians = () => (
  <div id="gaurdiansPage" className="is-hidden" pageItem>
    <Link to='/gaurdians-detail' className="page-banner gaurdians-banner"><span></span>gaurdians</Link>
    <section className="gaurdian-buttons">
      {data2.gaurdians.map((gaurdian) => (
        <div className="gaurdian-buttons__gaurdian-button" view-path="gaurdianDetails" navbutton>
          <div className="gaurdian-buttons__profile-picture" style={{backgroundImage: gaurdian.profilePicture}}></div>
          <div className="gaurdian-buttons__gaurdian-name">{gaurdian.firstName} {gaurdian.lastName}</div>
          <div className="gaurdian-buttons__gaurdian-title">{gaurdian.gaurdianStatus}</div>
        </div>
      ))}
    </section>
    <div className="gaurdian-buttons__gaurdian-button" navbutton>
      <div className="gaurdian-buttons__profile-picture add-more"></div>
      <div className="gaurdian-buttons__gaurdian-name">Add a Gaurdian</div>
    </div>
    <div className='shows'>
      {data2.gaurdians.map((gaurdian) => (
        <div className='show-card'>
          <div className='show-card-text'>
            <h3 className='show-card-title'>{gaurdian.firstName}</h3>
            <h4 className='show-card-year'>({gaurdian.lastName})</h4>
            <p className='show-card-description'>{gaurdian.gaurdianStatus}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

module.exports = Gaurdians
