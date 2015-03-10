var React = require('react');
var ScheduleDay = require('./day');

var ScheduleContent = React.createClass({

  getInitialState: function () {
    return {
      days: [
        'Poniedziałek',
        'Wtorek',
        'Środa',
        'Czwartek',
        'Piątek'
      ]
    };
  },

  render: function () {
    var self = this;

    var daysMapper = function (day) {
      return <ScheduleDay timelineStart={self.props.start} name={day} />;
    };

    return (
      <div className="r-content">
        {this.state.days.map(daysMapper)}
      </div>
    );
  }

});

module.exports = ScheduleContent;