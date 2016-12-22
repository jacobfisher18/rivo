import React, { Component } from 'react';

class Event extends Component {

  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
      name: this.props.name,
      location: this.props.location,
      tags: this.props.tags,
      dateDay: this.props.dateDay,
      dateMonth: this.props.dateMonth
    };
  }

  render() {
    return (

        <div className="Event">
          <div className="eventDate">
            <p className="eventDateDay">{this.state.dateDay}</p>
            <p className="eventDateMonth">{this.state.dateMonth}</p>
          </div>
          <img className="eventIMG" src={require('../../IMG/' + this.state.img)}></img>
          <p className="eventName">{this.state.name}</p>
          <p className="eventLocation">{this.state.location}</p>
          <div className="eventDividerLine"></div>
          <div className="eventTags">
            <div className="eventTag">#{this.state.tags[0]}</div>
            <div className="eventTag">#{this.state.tags[1]}</div>
            <div className="eventTag">#{this.state.tags[2]}</div>
          </div>
        </div>
    );
  }
}

export default Event;
