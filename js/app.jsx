var roomsArray = ['National', 'Lewandowski', 'NextToMama', 'NextToPapa'];
var mainContent = document.getElementById('content');
var usersList = ['Janek', 'Grzegorz', 'Rafał', 'Michał'];

var ReservationApp = React.createClass({
  render: function() {
    return (
      <div>
        <AddReservation />
        <CalendarHeader rooms={this.props.rooms} />
        <CalendarContent people={this.props.people} />
      </div>
    );
  }
});

var CalendarHeader = React.createClass({
  render: function() {
    var createOption = function(option) {
      return <option value="{option}">{option}</option>;
    };
    return <select ref="sel">{this.props.rooms.map(createOption)}</select>;
  }
});

var AddReservation = React.createClass({
  handleClick: function() {
    console.log('Clicked!');
  },

  render: function() {
    var styles = {
      'margin': '20px',
      'font-size': '20px'
    };

    return <span style={styles} onClick={this.handleClick}>+</span>;
  }
});

var UserSelectBox = React.createClass({
  render: function(){
    var generateSelectBox = function(data){
      return <option value={data}>{data}</option>
    };

    return <select name="people">{this.props.people.map(generateSelectBox)}</select>
  }
});

var CalendarContent = React.createClass({
  bindEvents: function() {

  },

  render: function() {
    return <div ref="cont">
            <input type="datetime-local" id="reservation-start" name="reservation-start" />
            <input type="datetime-local" id="reservation-end" name="reservation-end" />
            <UserSelectBox people={this.props.people} />
            <button id="add-reservation-btn" onClick={this.bindEvents}>add</button>
           </div>
  }
});

React.render(
  <ReservationApp rooms={roomsArray} people={usersList} />, mainContent
);
