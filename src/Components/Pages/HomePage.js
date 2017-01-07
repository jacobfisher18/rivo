import React, { Component } from 'react';
import Favicon from 'react-favicon'

import '../../CSS/App.css';

import Main from '../Sections/Main';
import Header from '../Elements/Header';
import NavHeader from '../Elements/NavHeader';
import Trending from '../Sections/Trending';
import NearAndNow from '../Sections/NearAndNow';
import Browse from '../Sections/Browse';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sectionSelected: 0
    };

    this.handleSectionSelect = this.handleSectionSelect.bind(this);
  }

  handleSectionSelect(newSection) {
    this.setState({
      sectionSelected: newSection
    });
  }

  render() {

    let sectionSelected = null;
    if (this.state.sectionSelected === 0) {sectionSelected = <Trending />;}
    else if (this.state.sectionSelected === 1) {sectionSelected = <NearAndNow />;}
    else {sectionSelected = <Browse />;}

    return (
      <div className="app">

        <Favicon url={require("../../../IMG/logo_favicon.png")} />
        <Main />
        <Header headerType="main"/>
        <NavHeader selectMethod={this.handleSectionSelect}/>
        {sectionSelected}
      </div>
    );
  }
}

export default HomePage;
