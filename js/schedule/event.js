var React = require('react');

var ScheduleEvent = React.createClass({

  getInitialState: function () {
    return {
      start: '',
      end: ''
    };
  },

  render: function () {
    //8:30
    //10:30
    var start = this.props.eventCollection.start.split(':');
    var end   = this.props.eventCollection.end.split(':');
    var top, height;

    //top     = Number(start[0] - +this.props.timelineStart) * 60 + Number(start[1]);
    top = 20;
    //height  = Number(end[0] - * 60 + Number(end[1]) - top;
    height = 50;

    var style = {
      top: top + 'px',
      height: height + 'px'
    };

    return (
      <div className="r-event" style={style}>{this.props.eventCollection.name}</div>
    );
  }

});

module.exports = ScheduleEvent;