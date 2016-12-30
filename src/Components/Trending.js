import React, { Component } from 'react';

import Event from './Event';
import Channel from './Channel';

import axios from 'axios';

import { Router, Route, hashHistory, Link } from 'react-router';

class Trending extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };

    this.onModalClick = this.onModalClick.bind(this);
  }

  onModalClick(name) {
    this.props.modalMethod(name);
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
      <div className="trending">
        <p  className="trendingTitle">Events</p>
        <Event onClick={this.onModalClick.bind(this, "Saint Pablo Tour")} img='pablo.png' name="Saint Pablo Tour" location="Echoplex" tags={["Echoplex", "Concerts", "Featured"]} dateDay={14} dateMonth="NOV"/>
        <Event onClick={this.onModalClick.bind(this, "Santa Monica Car Show")} img='car.png' name="Santa Monica Car Show" location="Santa Monica" tags={["Santa Monica", "Concerts", "Featured"]}  dateDay={18} dateMonth="NOV"/>
        <Event onClick={this.onModalClick.bind(this, "Corgi Beach Day")} img='corgi.png' name="Corgi Beach Day" location="Venice" tags={["Venice", "Concerts", "Featured"]}  dateDay={21} dateMonth="NOV"/>
        <Event onClick={this.onModalClick.bind(this, "Yoga in the Park")} img='yoga.png' name="Yoga in the Park" location="Griffith Park" tags={["Griffith Park", "Concerts", "Featured"]}  dateDay={3} dateMonth="DEC"/>
        <Event onClick={this.onModalClick.bind(this, "Santa Monica Car Show")} img='car.png' name="Santa Monica Car Show" location="Santa Monica" tags={["Santa Monica", "Concerts", "Featured"]}  dateDay={18} dateMonth="NOV"/>
        <Event onClick={this.onModalClick.bind(this, "Corgi Beach Day")} img='corgi.png' name="Corgi Beach Day" location="Venice" tags={["Venice", "Concerts", "Featured"]}  dateDay={21} dateMonth="NOV"/>
        <Event onClick={this.onModalClick.bind(this, "Yoga in the Park")} img='yoga.png' name="Yoga in the Park" location="Griffith Park" tags={["Griffith Park", "Concerts", "Featured"]}  dateDay={3} dateMonth="DEC"/>
        <p className="trendingTitle">Channels</p>
        <Link to="/channel"><Channel img='echo.png' name="Echoplex" twitter="echoplexofficial" verified={true} events={381} followers={553} category="LA Concerts"/></Link>
        <Link to="/channel"><Channel img='greek.png' name="Greek" twitter="greektheater" verified={true} events={381} followers={553} category="Outdoor"/></Link>
        <Link to="/channel"><Channel img='hollywood.png' name="Hollywood Bowl" twitter="hollywoodbowl" verified={true} events={381} followers={553} category="Outdoor"/></Link>
        <Link to="/channel"><Channel img='shrine.png' name="Shrine Auditorium" twitter="shrinela" verified={true} events={381} followers={553} category="LA Concerts"/></Link>
      </div>
    );
  }
}

export default Trending;
