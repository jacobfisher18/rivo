import React, { Component } from 'react';
import { Link } from 'react-router';

import SearchBar from './SearchBar';

class Header extends Component {
  render() {
    return (
      <div className={"header-" + this.props.headerType}>
        <Link to="/"><img className="logo pointer" src={require('../../../IMG/logo_grey.png')} alt="logo"></img></Link>
        <SearchBar />
        <div className="profileWrapper">
          <div className="profileImgWrapper">
            <img className="profileImg" src={require('../../../IMG/ned.png')} alt="Profile"></img>
          </div>
          <p className="sup">Sup, Eddard</p>
        </div>
      </div>
    );
  }
}

export default Header;
