var React = require('react');
var GroceryItem = require('./groceryitem.jsx');

var groceryitemlist = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Hey</h1>
        <ul>
          {
            this.props.items.map(function(item, index){
              return (
                <GroceryItem item={item} key={"item"+index}/>
              )
            })
          }
        </ul>
      </div>
    );
  }

});

module.exports = groceryitemlist;