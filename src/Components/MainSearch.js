import React, { Component } from 'react';

class MainSearch extends Component {
  render() {
    return (
      <div className="mainSearchWrapper">
        <input className="mainSearch" placeholder="concert in Santa Monica"></input>
        <p className="mainGo pointer">GO</p>
      </div>
    );
  }
}

export default MainSearch;
