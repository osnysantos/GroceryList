var React = require('react');
var ReactDOM = require('react-dom');

console.log(React);
console.log("Hello world from JSX");

var GroceryItemList = require('./components/groceryitemlist.jsx');

var items = [
  {
    name: "Item 1",
    checked: true
  },
  {
    name: "Item 2",
    checked: true
  },
  {
    name: "Item 3",
    checked: false
  }
]

ReactDOM.render(<GroceryItemList items={items} />, app);