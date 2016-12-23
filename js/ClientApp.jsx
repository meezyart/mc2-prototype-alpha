const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Gaurdians = require('./Gaurdians')
const GaurdiansDetail = require('./GaurdiansDetail')
const { Router, Route, hashHistory } = require('react-router')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/gaurdians' component={Gaurdians} />
    <Route path='/gaurdians-detail' component={GaurdiansDetail} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
