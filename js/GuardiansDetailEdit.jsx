const React = require('react')
const data = require('../public/mock-data')
const Header = require('./Header')
const Backbutton = require('./Backbutton')

const guardiansDetailEdit = (props) => (
  <div>
    <Header />
    <div id="guardian-details-edit">
      {data.guardians.filter((guardian) => guardian.id.toString() === props.params.id).map((guardian) => (
        <div>
          <div className="page-banner guardians-detail-page__banner">
            <Backbutton /><div className="icon"></div>guardians - {guardian.firstName}
          </div>
          <section className="guardian-profile">
            <div className="guardian-profile__profile-picture" style={{backgroundImage: guardian.profilePicture}}></div>
            <div className="guardian-profile__information">
              <div className="guardian-profile__guardian-name">{guardian.firstName} {guardian.lastName}</div>
              <div className="guardian-profile__guardian-title">{guardian.guardianStatus}</div>
            </div>
          </section>
          <div className="guardian-profile__edit" user-id={guardian.id}>
            <span className="editing">Editing</span>
            <span className="button button--save" user-id={guardian.id} view-path="guardianDetails" navbutton>Save</span>
            <span className="button button--cancel" user-id={guardian.id} view-path="guardianDetails" navbutton>Cancel</span>
          </div>
          <section className="guardianDetailsEdit__guardian-details">
            {guardian.additionalDetails.map((detail) => (
              <div className="guardianDetailsEdit__details-row">
                <div className="guardianDetailsEdit__category">{detail.category}</div>
                <div className="guardianDetailsEdit__info"><input type={detail.fieldType} defaultValue={detail.answer} /></div>
              </div>
            ))}
          </section>
        </div>
      ))}
    </div>
  </div>
)

guardiansDetailEdit.propTypes = {
  params: React.PropTypes.object
}

module.exports = guardiansDetailEdit
