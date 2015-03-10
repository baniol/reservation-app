var React = require('react');

var UserSelectBox = React.createClass({
  render: function(){
    var generateSelectBox = function(data){
      return <option value={data}>{data}</option>
    };

    return <select name='people' onChange={this.props.setPerson}>{this.props.people.map(generateSelectBox)}</select>
  }
});

module.exports = UserSelectBox;
