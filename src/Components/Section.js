import React, { Component } from 'react';

import Trending from './Trending';
import NearAndNow from './NearAndNow';
import Browse from './Browse';

class Section extends Component {

  render() {

    if (this.props.sectionSelected == 0) {
      return (
        <div className="Section">
          <Trending />
        </div>
      );
    }

    else if (this.props.sectionSelected == 1){
      return (
        <div className="Section">
          <NearAndNow />
        </div>
      );
    }

    else {
      return (
        <div className="Section">
          <Browse />
        </div>
      );
    }
  }
}

export default Section;
