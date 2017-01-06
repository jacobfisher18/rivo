import React, { Component } from 'react';
import axios from 'axios';

import Event from './Event';

class SearchEvents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentWillMount() {
    var _this = this;

    var searchTerm = this.props.searchTerm;

    //to-do: change date in url to current date (only future, no past events)
    //limit is currently 10; add ability to see more
    var url = 'https://apiv1.getrivo.com/macroevents/explore?metaDataOnly=false&name=%22' + searchTerm + '%22&limit=10';

    axios.get(url)
    .then(function (data) {

      console.log(data);
      for (var i = 0; i < data.data.eventsList.length; i++) {

        var loadedIMG = "";
        if (data.data.eventsList[i].hasOwnProperty('customImageUrl')) {
          loadedIMG = data.data.eventsList[i].customImageUrl;
        }
        else {
          loadedIMG = data.data.eventsList[i].cloudinaryImageUrl;
        }

        _this.setState({
          events: _this.state.events.concat(
            {
              name: [data.data.eventsList[i].eventSummary],
              img: loadedIMG,
              location: [data.data.eventsList[i].neighborhood],
              tags: ["Griffith", "Concerts", "Featured"],
              dateDay: 3,
              dateMonth: "DEC"
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

    let noneFound = <p></p>
    if (this.state.events.length === 0) {
      noneFound = <p style={{ fontSize: '20px', margin: '30px 30px'}}>No results found for: {this.props.searchTerm}</p>
    }

    return (
      <div className="searchEventSection">
        {noneFound}
        {eventComponents}
      </div>
    );
  }
}

export default SearchEvents;
