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
  componentWillMount() {
    // Remove the 'www.' to cause a CORS error (and see the error state)
    axios.get(`http://mycommunityclassroom.herokuapp.com/api/v1/user/583d2be3330b4500660b78e2/details`)
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
    var obj = {a:1, b:2, c:3}
    
    for (var prop in obj) {
      console.log('obj.' + prop, '=', obj[prop])
    }

    var outPut = []

    for (let item in this.state.posts){
      let value = this.state.posts[item] 
      outPut.push(<li>{`${item} ${value}`}</li>)
    }
    return (
      <ul>
        {outPut}
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
