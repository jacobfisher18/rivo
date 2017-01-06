import React, { Component } from 'react';

import '../CSS/App.css';

import Header from '../Components/Header';
import SearchEvents from '../Components/SearchEvents';

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
        <SearchEvents searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default SearchPage;
