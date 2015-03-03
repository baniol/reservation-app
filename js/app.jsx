var roomsArray = ['National', 'Lewandowski', 'NextToMama', 'NextToPapa'];
var mainContent = document.getElementById('content');
var usersList = ['Janek', 'Grzegorz', 'Rafał', 'Michał'];

var ReservationApp = React.createClass({
  getInitialState: function() {
    return {room: this.props.rooms[0]}
  },

  getCurrentRoom: function() {
    return this.state.room;
  },

  handleUpdate: function(room) {
    this.setState({
      room: room
    });
  },

  render: function() {
    return (
      <div>
        <CalendarHeader rooms={this.props.rooms} update={this.handleUpdate} />
        <CalendarContent people={this.props.people} getRoom={this.getCurrentRoom} />
      </div>
    );
  }
});

var CalendarHeader = React.createClass({
  changeRoom: function () {
    var value = this.getDOMNode().value;
    this.props.update(value)
  },

  render: function() {
    var createOption = function(option) {
      return <option value={option}>{option}</option>;
    };
    return <select ref='sel' onChange={this.changeRoom}>{this.props.rooms.map(createOption)}</select>;
  }
});

var UserSelectBox = React.createClass({
  render: function(){
    var generateSelectBox = function(data){
      return <option value={data}>{data}</option>
    };

    return <select name='people'>{this.props.people.map(generateSelectBox)}</select>
  }
});

var CalendarContent = React.createClass({
  addReservation: function() {
    console.log(this.props.getRoom())
  },

  render: function() {
    return <div ref="cont">
            <input type="datetime-local" id="reservation-start" name="reservation-start" />
            <input type="datetime-local" id="reservation-end" name="reservation-end" />
            <UserSelectBox people={this.props.people} />
            <button id="add-reservation-btn" onClick={this.addReservation}>add</button>
           </div>
  }
});

React.render(
  <ReservationApp rooms={roomsArray} people={usersList} />, mainContent
);
