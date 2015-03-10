var React = require('react');

var ScheduleEvent = React.createClass({

  getInitialState: function () {
    return {
      start: '',
      end: ''
    };
  },

  render: function () {

    var start = this.props.data.start.split(':');
    var end   = this.props.data.end.split(':');
    var top, height;

    top     = Number(start[0] - +this.props.timelineStart) * 60 + Number(start[1]);
    height  = Number(end[0] - +this.props.timelineStart) * 60 + Number(end[1]) - top;

    var style = {
      top: top + 'px',
      height: height + 'px'
    };

    return (
      <div className="r-event" style={style}>{this.props.data.name}</div>
    );
  }

});

module.exports = ScheduleEvent;