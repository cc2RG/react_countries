var React = require('react');

var CountriesSelect = React.createClass({
  getInitialState: function(){
    return({ selectedIndex: null });
  },
  handleChange: function(event){
    event.preventDefault();
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});
    var currentCountry = this.props.countries[newIndex];
    this.props.onSelectCountry(currentCountry);
  },
  render: function(){
    var countryOptions = this.props.countries.map(function(country, index){
      return(
        <option value={index} key={index}>{country.name}</option>
      );
    });
    return(
      <div>
        <select value={this.state.selectedIndex} onChange={this.handleChange}>
          {countryOptions}
        </select>
      </div>
    );
  }
});

module.exports = CountriesSelect;