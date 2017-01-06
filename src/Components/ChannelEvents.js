import React, { Component } from 'react';
import axios from 'axios';

import Event from './Event';

class ChannelEvents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentWillMount() {
    var _this = this;

    var channelID = this.props.id;

    //to-do: change date in url to current date
    var url = 'https://apiv1.getrivo.com/macroevents/getmacroeventsbychannelid?channelId=' + channelID + '&asc=true&start=0&startDate=2017/1/4%2000:00:00%20-0700';

    axios.get(url)
    .then(function (data) {
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

  render() {

    let eventComponents = [];
    for (var i = 0; i < this.state.events.length; i++) {
      var currEvent = this.state.events[i];
      eventComponents.push( <Event img={currEvent.img} name={currEvent.name} location={currEvent.location} tags={currEvent.tags}  dateDay={currEvent.dateDay} dateMonth={currEvent.dateMonth}/> );
    }

    return (
      <div className="channelEventSection">
        <div className="gridContainer">
          {eventComponents}
        </div>
      </div>
    );
  }
}

export default ChannelEvents;
