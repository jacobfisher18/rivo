import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <div className="category gridItem pointer" onClick={this.props.onClick}>
        <p className="categoryItem categoryName">{this.props.name}</p>
        <p className="categoryItem categoryEventsTitle">Events</p>
        <p className="categoryItem categoryEvents">{this.props.events}</p>
      </div>
    );
  }
}

export default Category;
