import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";

import mapStyles from "../JSON/mapStyles.json";

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    defaultOptions={{ styles: mapStyles }}
  />
));

class Map extends Component {

  render() {
    return (
      <SimpleMapExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    );
  }
}

export default Map;
