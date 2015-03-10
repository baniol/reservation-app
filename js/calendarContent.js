var React = require('react');

var UserSelectBox = require('./userSelectBox');

var CalendarContent = React.createClass({
  componentDidMount: function() {
    this.setState({
      person: this.refs.UserSelectBox.getDOMNode().value
    });
  },

  setPerson: function () {
    var value = this.refs.UserSelectBox.getDOMNode().value;

    this.setState({
      person: value
    })
  },

  setStart: function () {
    var date = new Date(this.refs.reservationStart.getDOMNode().value);

    this.setState({
      reservationStart: date
    });
  },

  setEnd: function () {
    var date = new Date(this.refs.reservationEnd.getDOMNode().value);

    this.setState({
      reservationEnd: date
    });
  },

  render: function() {
    return <div ref="cont">
            <input ref="reservationStart" type="datetime-local" id="reservation-start" name="reservation-start" onChange={this.setStart} />
            <input ref="reservationEnd" type="datetime-local" id="reservation-end" name="reservation-end" onChange={this.setEnd} />
            <UserSelectBox people={this.props.people} ref="UserSelectBox" setPerson={this.setPerson} />
            <button id="add-reservation-btn" onClick={this.props.addReservation}>add</button>
           </div>
  }
});

module.exports = CalendarContent;
