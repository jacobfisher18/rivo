import React, { Component } from 'react';

import Map from '../Elements/Map';

class NearAndNow extends Component {

  render() {
    return (
      <div className="nearAndNow">
        <div className="map">
          <Map />
        </div>
      </div>
    );
  }
}

export default NearAndNow;
