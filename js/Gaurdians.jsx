const React = require('react')
const data = require('../public/data')
const data2 = require('../public/mock-data')
const { Link } = require('react-router')

const Gaurdians = () => (
  <div id="gaurdiansPage" className="is-hidden" pageItem>
    <Link to='/gaurdians-detail' className="page-banner gaurdians-banner"><span></span>gaurdians</Link>
    <section className="gaurdian-buttons"></section>
    <div className="gaurdian-buttons__gaurdian-button" navbutton>
      <div className="gaurdian-buttons__profile-picture add-more"></div>
      <div className="gaurdian-buttons__gaurdian-name">Add a Gaurdian</div>
    </div>
    <div className='shows'>
      {data.shows.map((show) => (
        <div className='show-card'>
          <img src={`public/img/posters/${show.poster}`} className='show-card-img' />
          <div className='show-card-text'>
            <h3 className='show-card-title'>{show.title}</h3>
            <h4 className='show-card-year'>({show.year})</h4>
            <p className='show-card-description'>{show.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className='shows'>
      {data2.gaurdians.map((gaurdian) => (
        <div className='show-card'>
          <div className='show-card-text'>
            <h3 className='show-card-title'>{gaurdian.firstName}</h3>
            <h4 className='show-card-year'>({gaurdian.lastName})</h4>
            <p className='show-card-description'>{gaurdian.gaurdianStatus}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

module.exports = Gaurdians
