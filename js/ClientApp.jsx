// styles
require('../styles/sass/style.sass')
const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Guardians = require('./Guardians')
const GuardiansDetail = require('./GuardiansDetail')
const GuardiansDetailEdit = require('./GuardiansDetailEdit')
const { Router, Route, hashHistory } = require('react-router')

class App extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Landing} />
        <Route path='/guardians' component={Guardians} />
        <Route path='/guardians-detail/(:id)' component={GuardiansDetail} />
        <Route path='/guardians-detail-edit/(:id)' component={GuardiansDetailEdit} />
        <Route path='/search' component={Search} />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
