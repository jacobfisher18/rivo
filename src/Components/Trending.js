import React, { Component } from 'react';
import axios from 'axios';

import Event from './Event';
import Channel from './Channel';

class Trending extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      channels: []
    };
  }

  componentWillMount() {
    //set the events array in state to load from the API
  }

  render() {

    let eventComponents = [];
    for (var i = 0; i < this.state.events.length; i++) {
      var currEvent = this.state.events[i];
      eventComponents.push( <Event img={currEvent.img} name={currEvent.name} location={currEvent.location} tags={currEvent.tags}  dateDay={currEvent.dateDay} dateMonth={currEvent.dateMonth}/> );
    }

    let channelComponents = [];
    for (var i = 0; i < this.state.channels.length; i++) {
      var currChannel = this.state.channels[i];
      channelComponents.push(<Channel id={currChannel.id} img={currChannel.img} name={currChannel.name} twitter={currChannel.twitter} verified={currChannel.verified} events={currChannel.events} followers={currChannel.followers} category={currChannel.category}/>);
    }

    return (
      <div className="trending">
        <p className="trendingTitle">Events</p>
        {eventComponents}
        <p className="trendingTitle">Channels</p>
        {channelComponents}
      </div>
    );
  }
}

export default Trending;
