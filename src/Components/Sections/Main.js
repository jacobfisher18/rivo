import React, { Component } from 'react';

import MainHeader from '../Elements/MainHeader';
import SearchBar from '../Elements/SearchBar';

class Main extends Component {

  render() {
    return (
      <div className="main">
        <MainHeader />
        <p className="mainSearchTitle">Find your next</p>
        <SearchBar type="main" />
      </div>
    );
  }
}

export default Main;
