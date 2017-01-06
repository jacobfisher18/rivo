import React, { Component } from 'react';

import EventModal from './EventModal';

class Event extends Component {

  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
      name: this.props.name,
      location: this.props.location,
      tags: this.props.tags,
      dateDay: this.props.dateDay,
      dateMonth: this.props.dateMonth,
      showModal: false
    };
  }

  handleOpenModal(name) {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {

    var IMGStyle = {
      backgroundImage: "url(" + this.state.img + ")"
    };

    var styleType = null;
    if (this.props.styleType === "sidebar") {
      styleType = "sidebarItem";
    }
    else {
      styleType = "gridItem";
    }

    return (
        <div className={"event pointer " + styleType} onClick={this.handleOpenModal.bind(this)}>
          {/*<div className="eventDate">
            <p className="eventDateDay">{this.state.dateDay}</p>
            <p className="eventDateMonth">{this.state.dateMonth}</p>
          </div>*/}
          <div className="eventIMGWrapper" style={IMGStyle}>
          </div>
          <div className="eventDetails">
            <p className="eventName">{this.state.name}</p>
            <p className="eventLocation">{this.state.location}</p>
          </div>
          <div className="eventTags">
            <div className="eventTag">#{this.state.tags[0]}</div>
            <div className="eventTag">#{this.state.tags[1]}</div>
            <div className="eventTag">#{this.state.tags[2]}</div>
          </div>
          <EventModal showModal={this.state.showModal} closeModal={this.handleCloseModal.bind(this)}  name={this.state.name} img={this.state.img}/>
        </div>
    );
  }
}

export default Event;
