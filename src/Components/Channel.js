import React, { Component } from 'react';
import { Link } from 'react-router';

class Channel extends Component {

  render() {

    return (
      <Link to={"/channel/" + this.props.id}>
        <div className="channel gridItem pointer">
          <div className="channelImg" style={{ backgroundImage: "url(" + this.props.img + ")" }} alt="Channel"></div>
          <div className="channelContent">
            <p className="channelName">{this.props.name}</p>
            <p className="channelTwitter">@{this.props.twitter}</p>
            <div className="channelEventsFollowers">
            <div className="channelEventsWrapper">
              <p className="channelEventsTitle">Events</p>
              <p className="channelEvents">{this.props.events}</p>
            </div>
            <div className="channelFollowersWrapper">
              <p className="channelFollowersTitle">Followers</p>
              <p className="channelFollowers">{this.props.followers}</p>
            </div>
            </div>
            <p className="channelCategory">{this.props.category}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default Channel;
