import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home'
import Profile from './users/Profile'
import Nav from './Nav'
import SearchResults from './SearchResults'



class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Profile' exact component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
