import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchPage from './SearchPage';
import ChannelPage from './ChannelPage';
import { Router, Route, hashHistory } from 'react-router';

/* Render Using ReactDOM without React Router*/
/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/search" component={SearchPage}/>
    <Route path="/channel" component={ChannelPage}/>
  </Router>
), document.getElementById('root'))
