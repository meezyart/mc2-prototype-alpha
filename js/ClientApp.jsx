// styles
require('../styles/sass/style.sass')
const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const guardians = require('./Guardians')
const guardiansDetail = require('./GuardiansDetail')
const { Router, Route, hashHistory } = require('react-router')

class App extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Landing} />
        <Route path='/guardians' component={guardians} />
        <Route path='/guardians-detail/(:id)' component={guardiansDetail} />
        <Route path='/search' component={Search} />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
