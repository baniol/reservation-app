var React = require('react');
var ScheduleEvent = require('./event');

var ScheduleDay = React.createClass({

  getInitialState: function () {
    return {
      events: [{
        start: '14:00',
        end: '16:00',
        name: 'event'
      }]
    };
  },

  render: function () {

    var self = this;

    var eventMapper = function (event) {
      return <ScheduleEvent eventCollection={event} /*data={event} *//>;
    };

    return (
      <div className="r-day">
        <div className="r-day-header">{this.props.dayName}</div>
        <div className="r-day-events">{this.props.timelineEvent.map(eventMapper)}</div>
      </div>
    );
  }

});

module.exports = ScheduleDay;