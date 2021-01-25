import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import history from './helpers/history';

import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={Home}/>
      </Router>
    );
  }
}

export default App;
