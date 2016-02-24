var React = require('react');
var CountriesSelect = require('./CountriesSelect.jsx');
var CountryDisplay = require('./CountryDisplay.jsx');
var BorderDisplay = require('./BorderDisplay.jsx');
var FilterSelect = require('./FilterSelect.jsx');
var CountriesBox =  React.createClass({

  
  getInitialState: function(){
    return {countries:[], currentCountry: null}
  },

  setCurrentCountry: function(country){
    this.setState({currentCountry: country}) 
  },
  
  componentDidMount:function(){
    var url = "https://restcountries.eu/rest/v1/all";
    
    var request = new XMLHttpRequest();
    request.open("GET", url);
    console.log(url)
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState({countries: data, currentCountry:data[0]})
    }.bind(this)
    request.send(null);
  },

  render: function(){
    return(
      <div>
        <h4>CountriesBox</h4>
        <CountriesSelect onSelectCountry={this.setCurrentCountry} countries={this.state.countries} ></CountriesSelect>
        <CountryDisplay countryToDisplay={this.state.currentCountry} countries={this.state.countries} setCurrentCountry={this.setCurrentCountry}>
        </CountryDisplay>
        
      </div> 
    )
  }
});

module.exports = CountriesBox;