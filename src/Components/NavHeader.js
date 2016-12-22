import React, { Component } from 'react';

class NavHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {navPosition: 0};
  }

  trendingClick() {
    this.setState({navPosition: 0});
  }

  nearandnowClick() {
    this.setState({navPosition: 100});
  }

  browseClick() {
    this.setState({navPosition: 200});
  }

  render() {
    return (
      <div className="NavHeader">
        <div className="navOptions">
          <div className="navOption pointer" onClick={this.trendingClick.bind(this)}>Trending</div>
          <div className="navOption pointer" onClick={this.nearandnowClick.bind(this)}>Near & Now</div>
          <div className="navOption pointer" onClick={this.browseClick.bind(this)}>Browse</div>
          <div className="navIndicator" style={{left:this.state.navPosition}}></div>
        </div>
      </div>
    );
  }
}

export default NavHeader;
