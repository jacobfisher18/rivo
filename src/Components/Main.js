import React, { Component } from 'react';

import MainHeader from './MainHeader';
import SearchBar from './SearchBar';

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
