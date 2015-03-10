var React = require('react');

var ScheduleScale = React.createClass({
    
  getInitialState: function () {
    var hours = [];
    for (i = +this.props.start; i <= +this.props.end; i++) {
      hours.push(i + ':00');
    }
    return {
      hours: hours
    };
  },

  render: function () {
    var i;
    var hoursMapper;

    hoursMapper = function (hour) {
      return <div className="r-scale-hour">{hour}</div>;
    };


    return (<div className="r-scale">
                <div className="r-scale-header">godz</div>
                {this.state.hours.map(hoursMapper)}
            </div>);
  }

});

module.exports = ScheduleScale;