import React, { Component } from 'react';

import '../../CSS/App.css';

import Header from '../Elements/Header';
import EventList from '../Containers/EventList';

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    }
  }

  componentWillMount() {
    var term = this.props.params.searchTerm;
    this.setState({
      searchTerm: term
    })
  }

  render() {
    return (
      <div>
        <Header headerType="main"/>
        <EventList searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default SearchPage;
