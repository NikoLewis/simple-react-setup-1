var React = require('react');

module.exports = React.createClass({
  render() {
    var clothes = this.props.itemList.map(function (x, i) {
      return (
      	<div key={i}>
	      	<ul>
		        <li>{x.title}</li>
		        <li>{x.image}</li>
		        <li>{x.desc}</li>
		        <li>{'$' + x.price}</li>
		      </ul>
	      </div>
	     )
    });

    return (
      <div>
        {clothes}
      </div>
    )
  },
});

