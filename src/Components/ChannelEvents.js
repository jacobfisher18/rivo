import React, { Component } from 'react';

import Event from './Event';

import axios from 'axios';

class ChannelEvents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentWillMount() {
    var _this = this;
    var url = 'https://apiv1.getrivo.com/channel/search?category=1&limit=5';
    axios.get(url)
    .then(function (data) {
      _this.setState({events: _this.state.events.concat([data.data.channelsList[0].name])});
      console.log(_this.state.events[0]);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="channelEventSection">
        <Event img='pablo.png' name="Saint Pablo Tour" location="Echoplex" tags={["Echoplex", "Concerts", "Featured"]} dateDay={14} dateMonth="NOV"/>
        <Event img='car.png' name="Santa Monica Car Show" location="Santa Monica" tags={["Santa Monica", "Concerts", "Featured"]}  dateDay={18} dateMonth="NOV"/>
        <Event img='corgi.png' name="Corgi Beach Day" location="Venice" tags={["Venice", "Concerts", "Featured"]}  dateDay={21} dateMonth="NOV"/>
        <Event img='yoga.png' name="Yoga in the Park" location="Griffith Park" tags={["Griffith Park", "Concerts", "Featured"]}  dateDay={3} dateMonth="DEC"/>
        <Event img='car.png' name="Santa Monica Car Show" location="Santa Monica" tags={["Santa Monica", "Concerts", "Featured"]}  dateDay={18} dateMonth="NOV"/>
        <Event img='corgi.png' name="Corgi Beach Day" location="Venice" tags={["Venice", "Concerts", "Featured"]}  dateDay={21} dateMonth="NOV"/>
        <Event img='yoga.png' name="Yoga in the Park" location="Griffith Park" tags={["Griffith Park", "Concerts", "Featured"]}  dateDay={3} dateMonth="DEC"/>
      </div>
    );
  }
}

export default ChannelEvents;
