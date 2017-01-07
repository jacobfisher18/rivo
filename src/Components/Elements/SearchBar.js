import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    }
  }

  handleTyping(e) { this.setState({ searchTerm: e.target.value }) }

  handleEnterPress(e) { if (e.keyCode === 13) { this.executeSearch(); } }

  handleGoClick() { this.executeSearch(); }

  executeSearch() { hashHistory.push('/search/' + this.state.searchTerm); }

  render() {

    let submitButton = null;
    let wrapperClass = "";
    let inputClass = "";
    let placeholder = "";
    if (this.props.type === "main") {
      wrapperClass = "mainSearchWrapper";
      inputClass = "mainSearch";
      placeholder = "concert in Santa Monica"
      submitButton = <p className="mainGo pointer" onClick={this.handleGoClick.bind(this)}>GO</p>
    }

    else {
      wrapperClass = "searchWrapper";
      inputClass = "search";
      submitButton = <img className="loupe pointer" src={require('../../../IMG/loupe.png')} alt="loupe"></img>
    }

    return (
      <div className={wrapperClass}>
        <input className={inputClass} onKeyDown={this.handleEnterPress.bind(this)} onChange={this.handleTyping.bind(this)} type="text" placeholder={placeholder}></input>
        {submitButton}
      </div>
    );
  }
}

export default SearchBar;
