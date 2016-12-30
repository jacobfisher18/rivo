import React, { Component } from 'react';
import './App.css';
import MainHeader from './Components/MainHeader';
import MainSearch from './Components/MainSearch';
import Header from './Components/Header';
import NavHeader from './Components/NavHeader';
import Trending from './Components/Trending';
import NearAndNow from './Components/NearAndNow';
import Browse from './Components/Browse';
import ReactModal from 'react-modal';

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(144, 19, 254, 0.8)';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sectionSelected: 0,
      showModal: false,
      eventName: ""
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleSectionSelect(newSection) {
    this.setState({
      sectionSelected: newSection
    });
  }

  handleOpenModal(name) {
    this.setState({
      showModal: true,
      eventName: name
    });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {

    let sectionSelected = null;

    if (this.state.sectionSelected === 0) {sectionSelected = <Trending modalMethod={this.handleOpenModal.bind(this)}/>;}
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
        <ReactModal className="eventModal" isOpen={this.state.showModal} onRequestClose={this.handleCloseModal}>
          <div className="eventModalIMGWrapper">
            <div className="eventModalExit pointer" onClick={this.handleCloseModal}>x</div>
          </div>
          <div className="eventModalDetails">
            <p className="eventModalName eventModalItem">{this.state.eventName}</p>
            <p className="eventModalLocation eventModalItem">Echoplex</p>
            <p className="eventModalDate eventModalItem">Tuesday, Nov. {24} </p>
            <p className="eventModalTime eventModalItem">7:30 PM</p>
            <p className="eventModalPrice eventModalItem">$75 - $127</p>
            <p className="eventModalLocation eventModalItem">1234 Westward Bound Dr.</p>
            <div className="eventModalLinks">
              <div className="eventModalLink eventModalGetTickets pointer">Get Tickets</div>
              <div className="eventModalLink eventModalWebsite pointer">Event Website</div>
            </div>
            <p className="eventModalDescription eventModalItem">The monkey-rop is found in all whalers monkey-rop is found in all whalers monkey-rop is found in all whalers monkey-rop is found in all whalers monkey-rop is found in all whalers</p>
          </div>
          <div className="eventModalTags">
            <div className="eventModalTag">#Echoplex</div>
            <div className="eventModalTag">#Kanye</div>
          </div>


        </ReactModal>
      </div>
    );
  }
}

export default App;
