var React = require('react');

var ScheduleDay = React.createClass({

  getInitialState: function () {
    return {
      events: []
    };
  },

  render: function () {

    var eventMapper = function (event) {
      return <div className="event">{event}</div>;
    };

    return (
      <div className="r-day">
        <div className="r-day-header">{this.props.name}</div>
        <div className="r-day-events">{this.state.events.map(eventMapper)}</div>
      </div>
    );
  }

});

module.exports = ScheduleDay;