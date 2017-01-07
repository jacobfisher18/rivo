import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './Components/Pages/HomePage';
import SearchPage from './Components/Pages/SearchPage';
import ChannelPage from './Components/Pages/ChannelPage';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render((
  <Router onUpdate={() => window.scrollTo(0,0)} history={hashHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="/search" component={SearchPage}/>
    <Route path="/search/:searchTerm" component={SearchPage}/>
    <Route path="/channel" component={ChannelPage}/>
    <Route path="/channel/:channelID" component={ChannelPage}/>
  </Router>
), document.getElementById('root'))
