/** @jsx React.DOM */

var React = require('react');
// Here we put our React instance to the global scope. Make sure you do not put it 
// into production and make sure that you close and open your console if the 
// DEV-TOOLS does not display
window.React = React;

var roomsArray = ['National', 'Lewandowski', 'NextToMama', 'NextToPapa'];
var mainContent = document.getElementById('content');
var usersList = ['Janek', 'Grzegorz', 'Rafał', 'Michał'];

var ReservationApp = require('./reservationApp');

React.render(
  <ReservationApp rooms={roomsArray} people={usersList} />, mainContent
);
