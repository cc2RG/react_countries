var React = require('react');
var CountriesBox = require('./CountriesBox');
var BorderDisplay = require('./BorderDisplay');
var CountryDisplay = React.createClass({
  
  render: function(){
    if(!this.props.countryToDisplay){return <h4>No Country Selected</h4>}
    var country = this.props.countryToDisplay;
    return(
      <div>
      <ul>
        <li>{country.name}</li>
        <li>{country.alpha3Code}</li>
      </ul>
      <BorderDisplay countryWithBorders={this.props.countryToDisplay} key={this.props.countryToDisplay.alpha3Code} countries={this.props.countries} setCurrentCountry={this.props.setCurrentCountry}></BorderDisplay>
      </div>
      )
  }
});

module.exports = CountryDisplay;