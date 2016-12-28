const React = require('react')
const data = require('../public/mock-data')

const GaurdiansDetail = () => (
  <div id="gaurdianDetails" className="is-hidden" pageItem>
    {data.guardians.map((gaurdian) => (
      <div>
        <div className="gaurdianDetails__profile-container">
          <div className="page-banner gaurdians-detail-page__banner"><span></span>gaurdians - Mary</div>
          <section className="gaurdian-profile">
            <div className="gaurdian-profile__profile-picture" style="background-image: url('images/profile-pic-mary.jpg')"></div>
            <div className="gaurdian-profile__information">
              <div className="gaurdian-profile__gaurdian-name">Mary Jefferson</div>
              <div className="gaurdian-profile__gaurdian-title">Mother</div>
            </div>
          </section>
        </div>
        <section className="gaurdianDetails__gaurdian-details">
          <div className="gaurdian-details__details-row">
            <div className="gaurdian-details__category">Profession</div>
            <div className="gaurdian-details__info">English Teacher</div>
          </div>
          <div className="gaurdian-details__details-row">
            <div className="gaurdian-details__category">Profession</div>
            <div className="gaurdian-details__info">English Teacher</div>
          </div>
        </section>
      </div>
    ))}
  </div>
)

module.exports = GaurdiansDetail
