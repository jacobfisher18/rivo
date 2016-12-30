import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import ChannelNav from './Components/ChannelNav';
import ChannelEvents from './Components/ChannelEvents';

class ChannelPage extends Component {

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

    if (this.state.sectionSelected === 0) {sectionSelected = <ChannelEvents />;}
    else {sectionSelected = <p>info</p>;}

    return (
      <div>
        <div className="channelPage">
          <Header headerType="channel"/>
        </div>
        <ChannelNav selectMethod={this.handleSectionSelect.bind(this)}/>
        {sectionSelected}
      </div>

    );
  }
}

export default ChannelPage;
