import React, { Component } from 'react';

import Map from './Map';
import Event from './Event';

class NearAndNow extends Component {

  render() {
    return (
      <div className="nearAndNow">
        <div className="sideBar">
          {/* Insert Events Here */}
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    );
  }
}

export default NearAndNow;
