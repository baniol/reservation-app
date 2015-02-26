var roomsArray = ['National', 'Lewandowski', 'NextToMama', 'NextToPapa'];
var mainContent = document.getElementById('content');

var ReservationApp = React.createClass({
  render: function() {
    return (
      <div>
        <AddReservation />
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
});

var AddReservation = React.createClass({
  handleClick: function() {
    console.log('Clicked!')
  },

  render: function() {
    var styles = {
      'margin': '20px',
      'font-size': '20px'
    };

    var bindClick = this.handleClick.bind(this);

    return <span style={styles} onClick={bindClick}>+</span>;
  }
});

React.render(
  <ReservationApp rooms={roomsArray} />, mainContent
);
