const React = require('react')
const data = require('../public/mock-data')
const axios = require('axios')
const Header = require('./Header')
const Backbutton = require('./Backbutton')
const { Link } = require('react-router')

class GuardiansDetail extends React.Component {
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
        <div id="guardian-details">
          <div className="page-banner guardians-detail-page__banner" key={this.state.posts._id}>
            <Backbutton /><div className="icon"></div>guardians - {this.state.posts.fName}
          </div>
          <div className="guardian-details__profile-container">
            <section className="guardian-profile">
              <div className="guardian-profile__profile-picture" style={{backgroundImage: this.state.posts.profilePicture}}></div>
              <div className="guardian-profile__information">
                <div className="guardian-profile__guardian-name">{this.state.posts.fName} {this.state.posts.lName}</div>
                <div className="guardian-profile__guardian-title">{this.state.posts.fName}</div>
              </div>
            </section>
            <div className="guardian-profile__edit" user-id="${data.id}">
              <Link to={`/guardians-detail-edit/${this.state.posts._id}`} className="button">Edit</Link>
            </div>
          </div>
          <section className="guardian-details__guardian-details">
            
          </section>
        </div>
      </div>
    )
  }
}

GuardiansDetail.propTypes = {
  params: React.PropTypes.object
}

module.exports = GuardiansDetail
