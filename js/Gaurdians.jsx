const React = require('react')
const { Link } = require('react-router')

const Gaurdians = () => (
  <div id="gaurdiansPage" className="is-hidden" pageItem>
    <Link to='/gaurdians-detail' className="page-banner gaurdians-banner"><span></span>gaurdians</Link>
    <section className="gaurdian-buttons"></section>
    <div className="gaurdian-buttons__gaurdian-button" navbutton>
      <div className="gaurdian-buttons__profile-picture add-more"></div>
      <div className="gaurdian-buttons__gaurdian-name">Add a Gaurdian</div>
    </div>
  </div>
)

module.exports = Gaurdians
