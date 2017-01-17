const React = require('react')
const data = require('../public/mock-data')

const GaurdiansDetail = (props) => (
  <div id="gaurdianDetails">
    {data.gaurdians.filter((gaurdian) => gaurdian.id.toString() === props.params.id).map((gaurdian) => (
      <div>
        <div className="page-banner gaurdians-detail-page__banner" key={gaurdian.id}><div className="icon"></div> gaurdians - {gaurdian.firstName} </div>
        <div className="gaurdianDetails__profile-container">
          <section className="gaurdian-profile">
            <div className="gaurdian-profile__profile-picture" style={{backgroundImage: gaurdian.profilePicture}}></div>
            <div className="gaurdian-profile__information">
              <div className="gaurdian-profile__gaurdian-name">{gaurdian.firstName} {gaurdian.lastName}</div>
              <div className="gaurdian-profile__gaurdian-title">{gaurdian.gaurdianStatus}</div>
            </div>
          </section>
        </div>
        <section className="gaurdianDetails__gaurdian-details">
          {gaurdian.additionalDetails.map((detail) => (
            <div className="gaurdian-details__details-row">
              <div className="gaurdian-details__category">{detail.category}</div>
              <div className="gaurdian-details__info">{detail.answer}</div>
            </div>
          ))}
        </section>
      </div>
    ))}
  </div>
)

GaurdiansDetail.propTypes = {
  params: React.PropTypes.object
}

module.exports = GaurdiansDetail
