var React = require('react');

var CalendarHeader = React.createClass({
  componentDidMount: function() {
    this.setState({
      room: this.getDOMNode().value
    });
  },

  changeRoom: function () {
    var value = this.getDOMNode().value;
    
    this.setState({
      room: value
    })
  },

  render: function() {
    var createOption = function(option) {
      return <option value={option}>{option}</option>;
    };
    return <select ref='sel' onChange={this.changeRoom}>{this.props.rooms.map(createOption)}</select>;
  }
});

module.exports = CalendarHeader;
