const React = require('react')
const data = require('../public/mock-data')
const axios = require('axios')
const Header = require('./Header')
const Backbutton = require('./Backbutton')
const { Link } = require('react-router')

class Guardians extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      loading: true,
      error: null
    }
  }
  componentDidMount() {
    // Remove the 'www.' to cause a CORS error (and see the error state)
    axios.get(`http://mycommunityclassroom.herokuapp.com/api/v1/user/583d2be3330b4500660b78e2/details`)
      .then(res => {
        // Transform the raw data by extracting the nested posts
        console.log(res)
        const posts = res.data.data.children.map(obj => obj.data)

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
  renderError() {
    return (
      <div>
        Uh oh: {this.state.error.message}
      </div>
    )
  }

  renderPosts() {
    if (this.state.error) {
      return this.renderError()
    }

    return (
      <ul>
        {this.state.posts.map(post =>
          <li key={post.id}>{post.title}</li>
        )}
      </ul>
    )
  }
  render () {
    return (
      <div>
        <Header />
        <div id="guardians-page">
          <div className="page-banner guardians-banner"><Backbutton /><div className="icon"></div>guardians</div>
          <section className="guardian-buttons">
            {data.guardians.map((guardian) => (
              <Link to={`/guardians-detail/${guardian.id}`} className="guardian-buttons__guardian-button" key={guardian.id}>
                <div className="guardian-buttons__profile-picture" style={{backgroundImage: guardian.profilePicture}}></div>
                <div className="guardian-buttons__guardian-name">{guardian.firstName} {guardian.lastName}</div>
                <div className="guardian-buttons__guardian-title">{guardian.guardianStatus}</div>
              </Link>
            ))}
          </section>
          {this.renderPosts()}
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
