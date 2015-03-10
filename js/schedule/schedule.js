var React = require('react');
var ScheduleScale = require('./scale');
var ScheduleContent = require('./content');

var Schedule = React.createClass({
  
  getInitialState: function() {
    return {
      start: 7,
      end: 19
    };
  },

  render: function() {
    var height = (Math.abs( (+this.props.end) - (+this.props.start) ) + 2) * 60;
    var style = {
      height: height + 'px'
    };
    return (
      <div className="r-schedule" style={style}>
        <ScheduleScale start={this.state.start} end={this.state.end} />
        <ScheduleContent start={this.state.start} end={this.state.end} />
      </div>
    );
  }
});

module.exports = Schedule;
