import React, { Component } from 'react';

import Category from './Category';

class Browse extends Component {
  render() {
    return (
      <div className="Browse">
        <p className="categoriesTitle trendingTitle">Categories</p>
        <Category name="Venues & Locations" channels={34}/>
        <Category name="Other Category" channels={15}/>
        <Category name="Other Category" channels={17}/>
        <Category name="Other Category" channels={29}/>
        <Category name="Other Category" channels={33}/>
      </div>
    );
  }
}

export default Browse;
