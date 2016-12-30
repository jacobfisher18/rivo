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

  handleSectionSelect(newSection) {
    this.setState({
      sectionSelected: newSection
    });
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <MainHeader />
          <p className="mainSearchTitle">Find your next</p>
          <MainSearch />
        </div>
        <div className="home">
          <Header />
          <NavHeader selectMethod={this.handleSectionSelect.bind(this)}/>
          <Section sectionSelected={this.state.sectionSelected}/>
        </div>
      </div>
    );
  }
}

export default App;
