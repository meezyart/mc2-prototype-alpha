const React = require('react')
const data = require('../public/mock-data')
const axios = require('axios')
const Header = require('./Header')
const Backbutton = require('./Backbutton')

class GuardiansDetailEdit extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      loading: true,
      error: null
    }
  }
  componentWillMount () {
    // Remove the 'www.' to cause a CORS error (and see the error state)
    axios.get('http://mycommunityclassroom.herokuapp.com/api/v1/user/583d2be3330b4500660b78e2/details')
      .then(res => {
        // Transform the raw data by extracting the nested posts
        const posts = res.data
        console.log(posts)

        // Update state to trigger a re-render.
        // Clear any errors, and turn off the loading indiciator.
        this.setState({
          posts,
          loading: false,
          error: null
        })
      })
      .catch(err => {
        // Something went wrong. Save the error in state and re-render.
        this.setState({
          loading: false,
          error: err
        })
      })
  }
  render () {
    return (
      <div>
        <Header />
        {console.log('this.props: ', this.props)}
        <div id="guardian-details-edit">
          {data.guardians.filter((guardian) => guardian.id.toString() === this.state.props.params.id).map((guardian) => (
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
  } 
}

GuardiansDetailEdit.propTypes = {
  params: React.PropTypes.object
}

module.exports = GuardiansDetailEdit
