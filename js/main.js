/** @jsx React.DOM */

var React = require('react');
// Here we put our React instance to the global scope. Make sure you do not put it 
// into production and make sure that you close and open your console if the 
// DEV-TOOLS does not display
window.React = React;

var roomsArray = ['National', 'Lewandowski', 'NextToMama', 'NextToPapa'];
var mainContent = document.getElementById('content');
var usersList = ['Janek', 'Grzegorz', 'Rafał', 'Michał'];
window.reservations = {
  'pn': {
    events: [
      {
        name: 'event-1',
        start: '8:00',
        end: '9:00'
      },
      {
        name: 'event-2',
        start: '18:00',
        end: '19:00'
      }
    ]
  }, 
  'wt': {
    events: [
      {
        name: 'event-3',
        start: '8:00',
        end: '9:00'
      },
      {
        name: 'event-4',
        start: '18:00',
        end: '19:00'
      }
    ]
  },
  'sr': {
    events: [
      {
        name: 'event-3',
        start: '8:00',
        end: '9:00'
      },
      {
        name: 'event-4',
        start: '18:00',
        end: '19:00'
      }
    ]
  },
  'cz': {
    events: [
      {
        name: 'event-3',
        start: '11:00',
        end: '12:00'
      }
    ]
  },
  'pt': {
    events: [
      {
        name: 'event-3',
        start: '8:00',
        end: '9:00'
      },
      {
        name: 'event-4',
        start: '18:00',
        end: '19:00'
      }
    ]
  },
};

var ReservationApp = require('./reservationApp');

React.render(
  <ReservationApp rooms={roomsArray} people={usersList} />, mainContent
);
