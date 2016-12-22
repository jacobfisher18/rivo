import React, { Component } from 'react';

class MainHeader extends Component {
  render() {
    return (
      <div className="MainHeader">
        <img className="logo pointer" src={require('../../IMG/logo.png')}></img>
        <div className="headerItem login pointer">login</div>
        <div className="headerItem signup pointer">signup</div>
      </div>
    );
  }
}

export default MainHeader;
