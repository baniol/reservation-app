var React = require('react');

var CalendarHeader = require('./calendarHeader');
var CalendarContent = require('./calendarContent');
var Schedule = require('./schedule/schedule');

var ReservationApp = React.createClass({
  getInitialState: function() {
    return {room: this.props.rooms[0]}
  },

  addReservation: function () {
    var room = this.refs.CalendarHeader.state.room;
    var person = this.refs.CalendarContent.state.person;
    var start = this.refs.CalendarContent.state.reservationStart;
    var end = this.refs.CalendarContent.state.reservationEnd;

    var obj = {
      room: room,
      person: person, 
      start: start,
      end: end
    };
  },

  render: function() {
    return (
      <div>
        <CalendarHeader rooms={this.props.rooms} update={this.handleUpdate} ref="CalendarHeader" />
        <CalendarContent people={this.props.people} ref="CalendarContent" addReservation={this.addReservation} />
        <Schedule />
      </div>
    );
  }
});

module.exports = ReservationApp;
