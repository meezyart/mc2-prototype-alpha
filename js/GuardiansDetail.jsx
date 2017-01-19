const React = require('react')
const data = require('../public/mock-data')
const Header = require('./Header')
const { Link } = require('react-router')

const guardiansDetail = (props) => (
  <div>
    <Header />
    <div id="guardian-details">
      {data.guardians.filter((guardian) => guardian.id.toString() === props.params.id).map((guardian) => (
        <div>
          <div className="page-banner guardians-detail-page__banner" key={guardian.id}><div className="icon"></div> guardians - {guardian.firstName} </div>
          <div className="guardian-details__profile-container">
            <section className="guardian-profile">
              <div className="guardian-profile__profile-picture" style={{backgroundImage: guardian.profilePicture}}></div>
              <div className="guardian-profile__information">
                <div className="guardian-profile__guardian-name">{guardian.firstName} {guardian.lastName}</div>
                <div className="guardian-profile__guardian-title">{guardian.guardianStatus}</div>
              </div>
            </section>
            <div className="guardian-profile__edit" user-id="${data.id}">
              <Link to={`/guardians-detail-edit/${guardian.id}`} className="button">Edit</Link>
            </div>
          </div>
          <section className="guardian-details__guardian-details">
            {guardian.additionalDetails.map((detail) => (
              <div className="guardian-details__details-row">
                <div className="guardian-details__category">{detail.category}</div>
                <div className="guardian-details__info">{detail.answer}</div>
              </div>
            ))}
          </section>
        </div>
      ))}
    </div>
  </div>
)

guardiansDetail.propTypes = {
  params: React.PropTypes.object
}

module.exports = guardiansDetail
