import React, { Component } from 'react';
import axios from 'axios';

import '../CSS/App.css';

import Header from '../Components/Header';
import ChannelNav from '../Components/ChannelNav';
import ChannelEvents from '../Components/ChannelEvents';

class ChannelPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      twitter: "",
      events: 0,
      followers: 0,
      verified: true,
      category: "",
      description: "",
      sectionSelected: 0
    };
  }

  handleSectionSelect(newSection) {
    this.setState({ sectionSelected: newSection });
  }

  componentWillMount() {
    var channelID = this.props.params.channelID;

    this.setState({ id: channelID });

    var _this = this;

    //to-do: change date in url to current date
    var url = 'https://apiv1.getrivo.com/channel/getchannelbyid?kaliChannelId=' + channelID + '&metaOnly=true';

    axios.get(url)
    .then(function (data) {
      _this.setState({
        name: data.data.name,
        twitter: "twitteraccount",
        events: data.data.futureEventsCount,
        followers: 0,
        verified: true,
        category: "Category",
        description: data.data.description
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {

    let sectionSelected = null;

    if (this.state.sectionSelected === 0) {sectionSelected = <ChannelEvents id={this.state.id}/>;}
    else {sectionSelected = <p className="channelPageDescription">{this.state.description}</p>;}

    return (
      <div>
        <div className="channelPage">
          <Header headerType="channel"/>

          <div className="channelPageNameCategory">
            <p className="channelPageName">{this.state.name}</p>
            <div className="channelPageCategory">{this.state.category}</div>
          </div>
          <p className="channelPageTwitter">@{this.state.twitter}</p>
          <div className="channelPageEventsFollowers">
            <div className="channelPageEventsWrapper">
              <p className="channelPageEventsTitle">Events</p>
              <p className="channelPageEvents">{this.state.events}</p>
            </div>
            <div className="channelPageFollowersWrapper">
              <p className="channelPageFollowersTitle">Followers</p>
              <p className="channelPageFollowers">{this.state.followers}</p>
            </div>
          </div>

        </div>
        <ChannelNav selectMethod={this.handleSectionSelect.bind(this)}/>
        {sectionSelected}
      </div>
    );
  }
}

export default ChannelPage;
