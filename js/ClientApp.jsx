// styles
require('../styles/sass/style.sass')
const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const guardians = require('./guardians')
const guardiansDetail = require('./guardiansDetail')
const { Router, Route, hashHistory } = require('react-router')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/guardians' component={guardians} />
    <Route path='/guardians-detail/(:id)' component={guardiansDetail} />
    <Route path='/search' component={Search} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
