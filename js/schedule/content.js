var React = require('react');
var ScheduleDay = require('./day');

var ScheduleContent = React.createClass({

  getInitialState: function () {
    return {
      days: [
        'pn',
        'wt',
        'sr',
        'cz',
        'pt'
      ]
    };
  },

  render: function () {
    var self = this;

    var daysMapper = function (day) {
      return <ScheduleDay timelineEvent={window.reservations[day].events} dayName={day}/>;
    };

    return (
      <div className="r-content">
        {this.state.days.map(daysMapper)}
      </div>
    );
  }

});

module.exports = ScheduleContent;