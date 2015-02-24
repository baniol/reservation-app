var mainContent = document.getElementById('content');

var ReservationApp = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Reservations</h3>
      </div>
    );
  }
});

React.render(
  <ReservationApp />, mainContent
);
