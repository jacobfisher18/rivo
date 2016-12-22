import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img className="logo pointer" src={require('../../IMG/logo_grey.png')}></img>
        <div className="searchWrapper">
          <input className="search">
          </input>
          <img className="loupe pointer" src={require('../../IMG/loupe.png')}></img>
        </div>
        <div className="profileWrapper">
          <div className="profileImgWrapper">
            <img className="profileImg" src={require('../../IMG/ned.png')}></img>
          </div>
          <p className="sup">Sup, Eddard</p>
        </div>
      </div>
    );
  }
}

export default Header;
