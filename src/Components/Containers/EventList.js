import React, { Component } from 'react';
import axios from 'axios';

import Event from '../Elements/Event';
import MoreButton from '../Elements/MoreButton';

function getMonthString(num) {
  switch (num) {
    case "01":
      return "JAN";
      break;
    case "02":
      return "FEB";
      break;
    case "03":
      return "MAR";
      break;
    case "04":
      return "APR";
      break;
    case "05":
      return "MAY";
      break;
    case "06":
      return "JUN";
      break;
    case "07":
      return "JUL";
      break;
    case "08":
      return "AUG";
      break;
    case "09":
      return "SEP";
      break;
    case "10":
      return "OCT";
      break;
    case "11":
      return "NOV";
      break;
    case "12":
      return "DEC";
      break;
    default:
      return "ERR";
  }
}

function getDateDayAndMonth(startDateTime) {

  var date = startDateTime[0];

  var day = date.slice(8,10);
  if (day.slice(0,1) === '0') {
    day = day.slice(1,2);
  }

  var monthNum = date.slice(5,7);
  var month = getMonthString(monthNum);

  return [day, month];
}

class EventList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      startIndex: 0
    };
  }

  loadEvents() {
    var _this = this;

    var limit = 8;
    var currDate = new Date();
    var formattedDate = currDate.getFullYear() + "/" + (currDate.getMonth() + 1) + "/" + currDate.getDate();

    var url = null;
    var searchTerm = (this.props.searchTerm != null);

    //for getting events by search term
    if (searchTerm) {
      url = 'https://apiv1.getrivo.com/macroevents/explore?metaDataOnly=false&name=%22' + this.props.searchTerm + '%22&limit=' + limit + '&start=' + this.state.startIndex;
    }

    //for getting events by channel id
    else {
      url = 'https://apiv1.getrivo.com/macroevents/getmacroeventsbychannelid?channelId=' + this.props.id + '&asc=true&start=' + this.state.startIndex + '&limit=' + limit + '&startDate=' + formattedDate + '%2000:00:00%20-0700';
    }

    axios.get(url)
    .then(function (data) {

      var list = null;
      if (searchTerm) {
        list = data.data.eventsList;
      }

      else {
        list = data.data.eventList;
      }

      _this.setState({
        startIndex: (_this.state.startIndex + limit + 1)
      });

      for (var i = 0; i < list.length; i++) {

        var loadedIMG = "";
        if (list[i].hasOwnProperty('customImageUrl')) {
          loadedIMG = list[i].customImageUrl;
        }
        else {
          loadedIMG = list[i].cloudinaryImageUrl;
        }

        _this.setState({
          events: _this.state.events.concat(
            {
              name: [list[i].eventSummary],
              img: loadedIMG,
              location: [list[i].neighborhood],
              tags: ["tag1", "tag2", "tag3", "tag4"],
              startDateTime: [list[i].startDateTime],
              description: [list[i].eventDescription]
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
  }

  render() {
    let eventComponents = [];
    for (var i = 0; i < this.state.events.length; i++) {
      var currEvent = this.state.events[i];

      var date = getDateDayAndMonth(currEvent.startDateTime);
      var dateDay = date[0];
      var dateMonth = date[1];

      eventComponents.push( <Event img={currEvent.img} name={currEvent.name} location={currEvent.location} tags={currEvent.tags}  dateDay={dateDay} dateMonth={dateMonth} description={currEvent.description}/> );
    }

    let noneFound = null;
    if (this.state.events.length === 0) {
      noneFound = <p style={{ fontSize: '20px', margin: '30px 30px'}}>No events found</p>
    }

    return (
        <div className="gridContainer">
          {noneFound}
          {eventComponents}
          <MoreButton onClick={this.loadEvents.bind(this)} height='220px'/>
        </div>
    );
  }
}

export default EventList;
