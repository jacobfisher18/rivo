import React, { Component } from 'react';
import axios from 'axios';

import Category from '../Elements/Category';
import ChannelList from '../Containers/ChannelList'

class Browse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategoryID: 0,
      loadChannels: false
    }
  }

  componentWillMount() {
    var _this = this;

    var url = 'https://apiv1.getrivo.com/category/getallcategories?start=0'

    axios.get(url)
    .then(function (data) {
      for (var i = 0; i < data.data.categoriesList.length; i++) {
        _this.setState({
          categories: _this.state.categories.concat(
            {
              name: [data.data.categoriesList[i].name],
              events: [data.data.categoriesList[i].futureEventsCount],
              id: [data.data.categoriesList[i].id]
            }
          )
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleCategoryClick(id) {
    this.setState({
      selectedCategoryID: id,
      loadChannels: true
    });
  }

  render() {

    let browseGridComponents = [];
    let sectionTitle = "";

    if (!this.state.loadChannels) {
      sectionTitle = "Categories";

      for (var i = 0; i < this.state.categories.length; i++) {
        var currCategory = this.state.categories[i];
        browseGridComponents.push( <Category onClick={this.handleCategoryClick.bind(this, currCategory.id)} name={currCategory.name} events={currCategory.events}/> );
      }
    }

    else {
      sectionTitle = "Channels";

      browseGridComponents = <ChannelList categoryID={this.state.selectedCategoryID} />
    }

    return (
      <div className="browse">
        <p className="categoriesTitle trendingTitle">{sectionTitle}</p>
        <div className="gridContainer">
          {browseGridComponents}
        </div>
      </div>
    );
  }
}

export default Browse;
