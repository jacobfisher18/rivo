/*
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import InputRange from 'react-input-range';
require('react-datepicker/dist/react-datepicker.css');

var DatePickerVar = React.createClass({
  displayName: 'Example',

  getInitialState: function() {
    return {
      startDate: moment()
    };
  },

  handleChange: function(date) {
    this.setState({
      startDate: date
    });
  },

  render: function() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange} />;
  }
});

require('rc-slider/assets/index.css');

var ReactDOM = require('react-dom');
var Slider = require('rc-slider');

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <div className="FilterBuffer">
          <div className="FilterButton">Filter</div>
        </div>
        <div className="FilterAttributesContainer">
          <div className="FilterAttributes">
            <div className="Neighborhood FilterAttributeContent">
              Neighborhood
              <div className="NeighborhoodSearchContiner">
                <form className="NeighborhoodSearch">
                  <input type="text" className="NeighborhoodSearch"></input>
                </form>
                <div className="locationIconContainer"></div>
              </div>
            </div>
          </div>
          <div className="FilterAttributes">
            <div className="Date FilterAttributeContent">
              Date
              <div className="DateRangeContainer">
                <div className="DateContainer">
                  <div className="DateText">From</div>
                  <DatePickerVar className="EndDatePicker"/>
                </div>
                <div className="DateContainer">
                  <div className="DateText">To &nbsp;&nbsp;&nbsp;&nbsp;</div>
                  <DatePickerVar className="EndDatePicker"/>
                </div>
              </div>
            </div>
          </div>
          <div className="FilterAttributes">
            <div className="Price FilterAttributeContent">
              Price
              <Slider range={true}/>
            </div>
          </div>
          <div className="FilterAttributes">
            <div className="ResultCount">
              127 Results
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;*/
