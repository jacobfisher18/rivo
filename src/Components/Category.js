import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <div className="Category gridItem pointer">
        <p className="categoryItem categoryName">{this.props.name}</p>
        <p className="categoryItem categoryChannelsTitle">Channels</p>
        <p className="categoryItem categoryChannels">{this.props.channels}</p>
      </div>
    );
  }
}

export default Category;
