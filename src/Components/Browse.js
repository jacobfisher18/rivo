import React, { Component } from 'react';
import axios from 'axios';

import Category from './Category';
import Channel from './Channel';

class Browse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      channels: [],
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
    var _this = this;

    var url = 'https://apiv1.getrivo.com/channel/search?category=' + id + '&start=0';

    axios.get(url)
    .then(function (data) {
      for (var i = 0; i < data.data.channelsList.length; i++) {
        var loadedIMG = "";
        if (data.data.channelsList[i].hasOwnProperty('customImageUrl')) {
          loadedIMG = data.data.channelsList[i].customImageUrl;
        }
        else {
          loadedIMG = data.data.channelsList[i].cloudinaryImageUrl;
        }

        _this.setState({
          channels: _this.state.channels.concat(
            {
              id: [data.data.channelsList[i].kaliChannelId],
              name: [data.data.channelsList[i].name],
              img: loadedIMG,
              twitter: "twitteraccount",
              verified: true,
              events: [data.data.channelsList[i].futureEventsCount],
              followers: [data.data.channelsList[i].subscriberCount],
              category: [data.data.channelsList[i].category]
            }
          )
        });


      }
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({ loadChannels: true});
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

      for (var i = 0; i < this.state.channels.length; i++) {
        browseGridComponents.push( <Channel id={this.state.channels[i].id} img={this.state.channels[i].img} name={this.state.channels[i].name} twitter={this.state.channels[i].twitter} verified={this.state.channels[i].verified} events={this.state.channels[i].events} followers={this.state.channels[i].followers} category={this.state.channels[i].category}/> );
      }
    }

    return (
      <div className="browse">
        <p className="categoriesTitle trendingTitle">{sectionTitle}</p>
        {browseGridComponents}
      </div>
    );
  }
}

export default Browse;
