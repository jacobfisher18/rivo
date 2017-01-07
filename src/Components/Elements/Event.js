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
      description: this.props.description,
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

    var tags = [];
    for (var i = 0; i < this.state.tags.length; i++) {
      tags.push(<div className="eventTag">#{this.state.tags[i]}</div>);
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
            <div className="eventDate">
              <p className="eventDateDay">{this.state.dateDay}</p>
              <p className="eventDateMonth">{this.state.dateMonth}</p>
            </div>
            <div className="eventNameAndLocation">
              <p className="eventName">{this.state.name}</p>
              <p className="eventLocation">{this.state.location}</p>
            </div>
          </div>
          <div className="eventTags">
            {tags}
          </div>
          <EventModal showModal={this.state.showModal} closeModal={this.handleCloseModal.bind(this)}  name={this.state.name} img={this.state.img} tags={this.state.tags} description={this.state.description}/>
        </div>
    );
  }
}

export default Event;
