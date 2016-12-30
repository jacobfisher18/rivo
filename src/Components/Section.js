import React, { Component } from 'react';

import Trending from './Trending';
import NearAndNow from './NearAndNow';
import Browse from './Browse';

class Section extends Component {

  render() {

    let sectionSelected = null;

    if (this.props.sectionSelected === 0) {sectionSelected = <Trending />;}
    else if (this.props.sectionSelected === 1) {sectionSelected = <NearAndNow />;}
    else {sectionSelected = <Browse />;}

    return (
      <div>
        {sectionSelected}
      </div>
    );
  }
}

export default Section;
