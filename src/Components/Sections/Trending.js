import React, { Component } from 'react';

import EventList from '../Containers/EventList';
import ChannelList from '../Containers/ChannelList';

class Trending extends Component {

  render() {

    return (
      <div className="trending">
        <p className="trendingTitle">Events</p>
          <EventList id='7c0a2cb6-7397-4a04-b342-6e4fce480704'/>
        <p className="trendingTitle">Channels</p>
          <ChannelList categoryID="17"/>
      </div>
    );
  }
}

export default Trending;
