var React = require('react');
var ReactDOM = require('react-dom');

/*
  StorePicker
  This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({

  render : function() {
    var name = "Andrew"
    return (
      <form className="store-selector">
        <h2>Please enter a Store {name}</h2>
        <input type="text" ref="storeId" />
        <input type="Submit" />
      </form>
    )
  }

});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
