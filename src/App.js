import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import history from './helpers/history';

import Home from "./pages/Home";
import Shop from "./pages/Shop"

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/shop" component={Shop}/>
      </BrowserRouter>
    );
  }
}

export default App;
