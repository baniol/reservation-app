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

    var daysMapper = function (day) {
      return <ScheduleDay name={day} />;
    };

    return (
      <div className="r-content">
        {this.state.days.map(daysMapper)}
      </div>
    );
  }

});

module.exports = ScheduleContent;