import React, { Component } from 'react';

class Channel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
      name: this.props.name,
      twitter: this.props.twitter,
      verified: this.props.verified,
      events: this.props.events,
      followers: this.props.followers,
      category: this.props.category
    };
  }

  render() {
    return (
      <div className="channel gridItem pointer">
        <img className="channelImg" src={require('../../IMG/' + this.state.img)} alt="Channel"></img>
        <div className="channelContent">
          <p className="channelName">{this.state.name}</p>
          <p className="channelTwitter">@{this.state.twitter}</p>
          <div className="channelEventsFollowers">
          <div className="channelEventsWrapper">
            <p className="channelEventsTitle">Events</p>
            <p className="channelEvents">{this.state.events}</p>
          </div>
          <div className="channelFollowersWrapper">
            <p className="channelFollowersTitle">Followers</p>
            <p className="channelFollowers">{this.state.followers}</p>
          </div>
          </div>
          <p className="channelCategory">{this.state.category}</p>
        </div>
      </div>
    );
  }
}

export default Channel;
