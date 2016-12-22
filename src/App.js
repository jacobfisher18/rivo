import React, { Component } from 'react';
import './App.css';
import MainHeader from './Components/MainHeader';
import MainSearch from './Components/MainSearch';
import Header from './Components/Header';
import NavHeader from './Components/NavHeader';
import Section from './Components/Section';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sectionSelected: 0
    };
  }

  render() {
    return (
      <div className="App">
        <div className="Main">
          <MainHeader />
          <h1 className="searchBarTitle">Find your next</h1>
          <MainSearch />
        </div>
        <div className="home">
          <Header />
          <NavHeader />
          <Section sectionSelected={this.state.sectionSelected}/>
        </div>
      </div>
    );
  }
}

export default App;
