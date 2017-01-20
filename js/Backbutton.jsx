const React = require('react')

class BackButton extends React.Component {
  prevPage () {
    window.history.back()
  }
  render () {
    return (
      <span onClick={this.prevPage}>BACK</span>
    )
  }
}

module.exports = BackButton
