var roomsArray = ['National', 'Lewandowski', 'NextToMama', 'NextToPapa'];
var mainContent = document.getElementById('content');

var ReservationApp = React.createClass({
  render: function() {
    return (
      <div>
        +
        <CalendarHeader rooms={this.props.rooms} />
      </div>
    );
  }
});

var CalendarHeader = React.createClass({
  render: function() {
    var createOption = function(option) {
      return <option value="{option}">{option}</option>;
    };
    return <select>{this.props.rooms.map(createOption)}</select>;
  }
})

React.render(
  <ReservationApp rooms={roomsArray} />, mainContent
);
