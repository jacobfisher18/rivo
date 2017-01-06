import React, { Component } from 'react';
import axios from 'axios';

import Event from './Event';
import Channel from './Channel';
import MoreButton from './MoreButton';

class Trending extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      channels: [],
      eventStartIndex: 0,
      channelStartIndex: 0
    };
  }

  loadEvents() {
    /* temporarily load from arbitraty channel */
    var _this = this;

    var channelID = '7c0a2cb6-7397-4a04-b342-6e4fce480704';

    //to-do: change date in url to current date
    //note: limit is currently 8
    var eventsUrl = 'https://apiv1.getrivo.com/macroevents/getmacroeventsbychannelid?channelId=' + channelID + '&asc=true&start=' + this.state.eventStartIndex + '&limit=8&startDate=2017/1/4%2000:00:00%20-0700';

    axios.get(eventsUrl)
    .then(function (data) {

      _this.setState({
        eventStartIndex: (_this.state.eventStartIndex + 8)
      });

      for (var i = 0; i < data.data.eventList.length; i++) {

        var loadedIMG = "";
        if (data.data.eventList[i].hasOwnProperty('customImageUrl')) {
          loadedIMG = data.data.eventList[i].customImageUrl;
        }
        else {
          loadedIMG = data.data.eventList[i].cloudinaryImageUrl;
        }

        _this.setState({
          events: _this.state.events.concat(
            {
              name: [data.data.eventList[i].eventSummary],
              img: loadedIMG,
              location: [data.data.eventList[i].neighborhood],
              tags: ["tag1", "tag2", "tag3"],
              dateDay: 0,
              dateMonth: "MON"
            }
          )
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  loadChannels() {
    var _this = this;

    var channelsUrl = 'https://apiv1.getrivo.com/channel/search?category=20&start=' + this.state.channelStartIndex + '&limit=8';

    axios.get(channelsUrl)
    .then(function (data) {

      _this.setState({
        channelStartIndex: (_this.state.channelStartIndex + 8)
      });

      for (var i = 0; i < data.data.channelsList.length; i++) {
        var loadedIMG = "";
        if (data.data.channelsList[i].hasOwnProperty('customImageUrl')) {
          loadedIMG = data.data.channelsList[i].customImageUrl;
        }
        else {
          loadedIMG = data.data.channelsList[i].cloudinaryImageUrl;
        }

        _this.setState({
          channels: _this.state.channels.concat(
            {
              id: [data.data.channelsList[i].kaliChannelId],
              name: [data.data.channelsList[i].name],
              img: loadedIMG,
              twitter: "twitteraccount",
              verified: true,
              events: [data.data.channelsList[i].futureEventsCount],
              followers: [data.data.channelsList[i].subscriberCount],
              category: [data.data.channelsList[i].category]
            }
          )
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentWillMount() {
    this.loadEvents();
    this.loadChannels();
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
        <div className="gridContainer">
          {eventComponents}
          <MoreButton onClick={this.loadEvents.bind(this)} height='220px'/>
        </div>
        <p className="trendingTitle">Channels</p>
        <div className="gridContainer">
          {channelComponents}
          <MoreButton onClick={this.loadChannels.bind(this)} height='180px'/>
        </div>
      </div>
    );
  }
}

export default Trending;
