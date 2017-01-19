const React = require('react')
const data = require('../public/mock-data')
const Header = require('./Header')
const { Link } = require('react-router')

class Guardians extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div id="guardians-page">
          <div className="page-banner guardians-banner"><div className="icon"></div>guardians</div>
          <section className="guardian-buttons">
            {data.guardians.map((guardian) => (
              <Link to={`/guardians-detail/${guardian.id}`} className="guardian-buttons__guardian-button" key={guardian.id} view-path="guardianDetails" navbutton>
                <div className="guardian-buttons__profile-picture" style={{backgroundImage: guardian.profilePicture}}></div>
                <div className="guardian-buttons__guardian-name">{guardian.firstName} {guardian.lastName}</div>
                <div className="guardian-buttons__guardian-title">{guardian.guardianStatus}</div>
              </Link>
            ))}
          </section>
          <div className="guardian-buttons__guardian-button" navbutton>
            <div className="guardian-buttons__profile-picture add-more"></div>
            <div className="guardian-buttons__guardian-name">Add a guardian</div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Guardians
