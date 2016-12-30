import React, { Component } from 'react';
import './App.css';
import MainHeader from './Components/MainHeader';
import MainSearch from './Components/MainSearch';
import Header from './Components/Header';
import NavHeader from './Components/NavHeader';
import Trending from './Components/Trending';
import NearAndNow from './Components/NearAndNow';
import Browse from './Components/Browse';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sectionSelected: 0
    };
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
        <div className="main">
          <MainHeader />
          <p className="mainSearchTitle">Find your next</p>
          <MainSearch />
        </div>
        <div className="home">
          <Header headerType="main"/>
          <NavHeader selectMethod={this.handleSectionSelect.bind(this)}/>
          {sectionSelected}
        </div>
      </div>
    );
  }
}

export default App;
