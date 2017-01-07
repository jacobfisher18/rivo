import React, { Component } from 'react';

class ChannelNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navPosition: 0
    };
  }

  onSectionSelect(newSection) {
    this.props.selectMethod(newSection);
    this.setState({navPosition: 100 * newSection});
  }

  render() {
    return (
      <div className="navHeader">
        <div className="channelNavOptions">
          <div className="navOption pointer" onClick={this.onSectionSelect.bind(this, 0)}>Events</div>
          <div className="navOption pointer" onClick={this.onSectionSelect.bind(this, 1)}>Info</div>
          <div className="navIndicator" style={{left:this.state.navPosition}}></div>
        </div>
      </div>
    );
  }
}

export default ChannelNav;
