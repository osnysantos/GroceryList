var React = require('react');

var groceryitem = React.createClass({

  render: function() {
    return (
      <li>{this.props.item.name}</li>
    );
  }

});

module.exports = groceryitem;