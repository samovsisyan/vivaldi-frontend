import React from 'react';
import { BrowserRouter, Route, useHistory} from 'react-router-dom'

import Home from "./pages/Home";
import Shop from "./pages/Shop"

function App () {
  let history = useHistory();
    return (
      <BrowserRouter history={history}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/shop" component={Shop}/>
      </BrowserRouter>
    );
}

export default App;
