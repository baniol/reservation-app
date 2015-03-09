var React = require('react');

var CalendarHeader = require('./calendarHeader');
var CalendarContent = require('./calendarContent');

var ReservationApp = React.createClass({
  getInitialState: function() {
    return {room: this.props.rooms[0]}
  },

  getCurrentRoom: function() {
    return this.state.room;
  },

  handleUpdate: function(room) {
    this.setState({
      room: room
    });
  },

  render: function() {
    return (
      <div>
        <CalendarHeader rooms={this.props.rooms} update={this.handleUpdate} />
        <CalendarContent people={this.props.people} getRoom={this.getCurrentRoom} />
      </div>
    );
  }
});

module.exports = ReservationApp;
