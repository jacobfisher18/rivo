import React, { Component } from 'react';

import '../CSS/App.css';

import Main from '../Components/Main';
import Header from '../Components/Header';
import NavHeader from '../Components/NavHeader';
import Trending from '../Components/Trending';
import NearAndNow from '../Components/NearAndNow';
import Browse from '../Components/Browse';

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
        <Main />
        <Header headerType="main"/>
        <NavHeader selectMethod={this.handleSectionSelect}/>
        {sectionSelected}
      </div>
    );
  }
}

export default HomePage;
