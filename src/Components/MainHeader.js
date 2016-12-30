import React, { Component } from 'react';

class MainHeader extends Component {
  render() {
    return (
      <div className="mainHeader">
        <img className="logo pointer" src={require('../../IMG/logo.png')} alt="logo"></img>
        <div className="mainHeaderItem signup pointer">signup</div>
        <div className="mainHeaderItem login pointer">login</div>
      </div>
    );
  }
}

export default MainHeader;
