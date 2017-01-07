import React, { Component } from 'react';

class MoreButton extends Component {

  render() {
    return (
      <div className="more gridItem pointer " onClick={this.props.onClick} style={{height: this.props.height, lineHeight: this.props.height}}>
        +More
      </div>
    );
  }
}

export default MoreButton;
