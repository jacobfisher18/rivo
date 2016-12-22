import React, { Component } from 'react';

import Event from './Event';
import Channel from './Channel';

class Trending extends Component {
  render() {
    return (
      <div className="Trending">
        <p className="trendingTitle">Events</p>
        <Event img='pablo.png' name="Saint Pablo Tour" location="Echoplex" tags={["Echoplex", "Concerts", "Featured"]} dateDay={14} dateMonth="NOV"/>
        <Event img='car.png' name="Santa Monica Car Show" location="Santa Monica" tags={["Santa Monica", "Concerts", "Featured"]}  dateDay={18} dateMonth="NOV"/>
        <Event img='corgi.png' name="Corgi Beach Day" location="Venice" tags={["Venice", "Concerts", "Featured"]}  dateDay={21} dateMonth="NOV"/>
        <Event img='yoga.png' name="Yoga in the Park" location="Griffith Park" tags={["Griffith Park", "Concerts", "Featured"]}  dateDay={3} dateMonth="DEC"/>
        <Event img='car.png' name="Santa Monica Car Show" location="Santa Monica" tags={["Santa Monica", "Concerts", "Featured"]}  dateDay={18} dateMonth="NOV"/>
        <Event img='corgi.png' name="Corgi Beach Day" location="Venice" tags={["Venice", "Concerts", "Featured"]}  dateDay={21} dateMonth="NOV"/>
        <Event img='yoga.png' name="Yoga in the Park" location="Griffith Park" tags={["Griffith Park", "Concerts", "Featured"]}  dateDay={3} dateMonth="DEC"/>
        <p className="trendingTitle">Channels</p>
        <Channel img='echo.png' name="Echoplex" twitter="echoplexofficial" verified={true} events={381} followers={553} category="LA Concerts"/>
        <Channel img='greek.png' name="Greek" twitter="greektheater" verified={true} events={381} followers={553} category="Outdoor"/>
        <Channel img='hollywood.png' name="Hollywood Bowl" twitter="hollywoodbowl" verified={true} events={381} followers={553} category="Outdoor"/>
        <Channel img='shrine.png' name="Shrine Auditorium" twitter="shrinela" verified={true} events={381} followers={553} category="LA Concerts"/>
      </div>
    );
  }
}

export default Trending;
