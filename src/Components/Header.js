import React, { Component } from 'react';

import { Router, Route, hashHistory, Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className={"header-" + this.props.headerType}>
        <Link to="/"><img className="logo pointer" src={require('../../IMG/logo_grey.png')} alt="logo"></img></Link>
        <div className="searchWrapper">
          <input className="search">
          </input>
          <img className="loupe pointer" src={require('../../IMG/loupe.png')} alt="loupe"></img>
        </div>
        <div className="profileWrapper">
          <div className="profileImgWrapper">
            <img className="profileImg" src={require('../../IMG/ned.png')} alt="Profile"></img>
          </div>
          <p className="sup">Sup, Eddard</p>
        </div>
      </div>
    );
  }
}

export default Header;
