var React = require('react');

var CalendarHeader = React.createClass({
  changeRoom: function () {
    var value = this.getDOMNode().value;
    this.props.update(value)
  },

  render: function() {
    var createOption = function(option) {
      return <option value={option}>{option}</option>;
    };
    return <select ref='sel' onChange={this.changeRoom}>{this.props.rooms.map(createOption)}</select>;
  }
});

module.exports = CalendarHeader;
