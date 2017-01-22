const React = require('react')
const axios = require('axios')
const Header = require('./Header')
const Backbutton = require('./Backbutton')
const { Link } = require('react-router')

class Guardians extends React.Component {
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
        <div id="guardians-page">
          <div className="page-banner guardians-banner"><Backbutton /><div className="icon"></div>guardians</div>
          <section className="guardian-buttons">
            <Link to={`/guardians-detail/${this.state.posts._id}`} className="guardian-buttons__guardian-button" key={this.state.posts._id}>
              <div className="guardian-buttons__profile-picture" style={{backgroundImage: this.state.posts.profilePicture}}></div>
              <div className="guardian-buttons__guardian-name">{this.state.posts.fName} {this.state.posts.lName}</div>
              <div className="guardian-buttons__guardian-title">{this.state.posts.relationship}</div>
            </Link>
          </section>
          <div className="guardian-buttons__guardian-button">
            <div className="guardian-buttons__profile-picture add-more"></div>
            <div className="guardian-buttons__guardian-name">Add a guardian</div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Guardians
