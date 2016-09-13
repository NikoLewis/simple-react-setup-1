var React = require('react');
var ReactDOM = require('react-dom');
var ItemComponent = require('./ItemComponent.jsx');
var FeaturedItems = require('./FeaturedItems.jsx');

var HelloWorld = React.createClass({
  getInitialState() {
    return {
      value: 'Search Store',
      items: [
        {
          title: 'really cheap item',
          price: 1
        },
        {
          image: 'dress pic',
          title: 'Ice Cream Dress',
          desc: 'a dress w/ ice cream',
          price: 10
        },
        {
          image: 't-shirt',
          title: 'Green T-shirt',
          desc: 'None',
          price: 90
        },
      ]
    };
  },

  handleChange(event) {
    var val = event.target.value;
    var items = this.state.items.filter( x => 
      x.title.toLowerCase().includes(val.toLowerCase()) 
    );
    this.setState({
      value: val,
      items
    });
  },

  render() {
    var featuredItem = this.state.items.find(x => x.price < 50) || this.state.items[0];

    return (
      <div>
        <h1>{"Welcome to Niko's Store"}</h1>

        <input 
          type='text'
          value={this.state.value}
          onChange={this.handleChange}/>

        <FeaturedItems 
          title={'Featured Items'}
          featuredItem={featuredItem}/>
        <ItemComponent itemList={this.state.items} />
      </div>
    )
  }
});



ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
