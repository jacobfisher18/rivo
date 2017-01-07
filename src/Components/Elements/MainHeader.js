import React, { Component } from 'react';
import { Link } from 'react-router';

class MainHeader extends Component {
  render() {
    return (
      <div className="mainHeader">
        <Link to="/"><img className="logo pointer" src={require('../../../IMG/logo.png')} alt="logo"></img></Link>
        <div className="mainHeaderItem signup pointer">signup</div>
        <div className="mainHeaderItem login pointer">login</div>
      </div>
    );
  }
}

export default MainHeader;
