import React, { Component } from 'react';
import axios from 'axios';

import Channel from '../Elements/Channel';
import MoreButton from '../Elements/MoreButton';

class ChannelList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      startIndex: 0
    };
  }

  loadChannels() {
    var _this = this;

    var limit = 8;

    var url = 'https://apiv1.getrivo.com/channel/search?category=' + this.props.categoryID + '&start=' + this.state.startIndex + '&limit=' + limit;

    axios.get(url)
    .then(function (data) {

      _this.setState({
        startIndex: (_this.state.startIndex + limit + 1)
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
    this.loadChannels();
  }

  render() {

    let channelComponents = [];
    for (var i = 0; i < this.state.channels.length; i++) {
      var currChannel = this.state.channels[i];
      channelComponents.push(<Channel id={currChannel.id} img={currChannel.img} name={currChannel.name} twitter={currChannel.twitter} verified={currChannel.verified} events={currChannel.events} followers={currChannel.followers} category={currChannel.category}/>);
    }

    return (
        <div className="gridContainer">
          {channelComponents}
          <MoreButton onClick={this.loadChannels.bind(this)} height='180px'/>
        </div>
    );
  }
}

export default ChannelList;
