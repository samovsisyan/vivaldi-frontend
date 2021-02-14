import React, {Component} from 'react';
import {HashRouter, BrowserRouter, Route} from 'react-router-dom'
import history from './helpers/history';
import Home from "./pages/Home";
import Shop from "./pages/Shop"

class App extends Component {
    render() {
        return (
            <HashRouter>
                {/*<BrowserRouter history={history}>*/}
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/shop" component={Shop}/>
                {/*</BrowserRouter>*/}
            </HashRouter>
        );
    }
}

export default App;
