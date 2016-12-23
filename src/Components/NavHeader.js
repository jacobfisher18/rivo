import React, { Component } from 'react';

class NavHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navPosition: 0,
      sectionSelected: 0
    };
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

  onSectionSelect(newSection) {
    this.props.selectMethod(newSection);
    this.setState({navPosition: 100 * newSection});
  }

  render() {
    return (
      <div className="NavHeader">
        <div className="navOptions">
          <div className="navOption pointer" onClick={this.onSectionSelect.bind(this, 0)}>Trending</div>
          <div className="navOption pointer" onClick={this.onSectionSelect.bind(this, 1)}>Near & Now</div>
          <div className="navOption pointer" onClick={this.onSectionSelect.bind(this, 2)}>Browse</div>
          <div className="navIndicator" style={{left:this.state.navPosition}}></div>
        </div>
      </div>
    );
  }
}

export default NavHeader;
