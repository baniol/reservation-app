var React = require('react');
var ScheduleScale = require('./scale');
var ScheduleContent = require('./content');

var Schedule = React.createClass({
  
  render: function() {
    var height = (Math.abs( (+this.props.end) - (+this.props.start) ) + 2) * 60;
    var style = {
      height: height + 'px'
    };
    return (
      <div className="r-schedule" style={style}>
        <ScheduleScale start={this.props.start} end={this.props.end} />
        <ScheduleContent />
      </div>
    );
  }
});

module.exports = Schedule;
