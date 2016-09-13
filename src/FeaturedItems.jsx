var React = require('react');

module.exports = React.createClass({
  render() {
    return (<div>
      <h2>
        {'Featured Today: ' + this.props.featuredItem.title}
      </h2>
    </div>)
  }
});
