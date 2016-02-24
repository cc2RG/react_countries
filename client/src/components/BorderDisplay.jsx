var React = require('react');
var CountriesBox = require('./CountriesBox');
var CountryDisplay = require('./CountryDisplay');

var BorderDisplay = React.createClass({

  handleBorderClick: function(event){
   event.preventDefault();
   var selectedCountryCode = event.target.innerText;
   var newDisplayCountry = this.props.countries.find(function(country){
      
      if(selectedCountryCode==country.alpha3Code){
        
        return country  
      }
   }); 
    this.props.setCurrentCountry(newDisplayCountry);
  },

  render: function(){
    var borders = this.props.countryWithBorders.borders.map(function(border,index){
      return(
        <li key={index}> <a href='#' onClick={this.handleBorderClick}>{border}</a> </li>
        )
    }.bind(this));
    return(
      <div>{borders}</div>
      )  
   }
});

module.exports = BorderDisplay;