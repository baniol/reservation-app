var React = require('react');

var UserSelectBox = require('./userSelectBox');

var CalendarContent = React.createClass({
  addReservation: function() {
    console.log(this.props.getRoom())
  },

  render: function() {
    return <div ref="cont">
            <input type="datetime-local" id="reservation-start" name="reservation-start" />
            <input type="datetime-local" id="reservation-end" name="reservation-end" />
            <UserSelectBox people={this.props.people} />
            <button id="add-reservation-btn" onClick={this.addReservation}>add</button>
           </div>
  }
});

module.exports = CalendarContent;
