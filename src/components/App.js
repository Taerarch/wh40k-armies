import React, { Component } from 'react';
import Home from './Home.js'
import Nav from './Nav.js'


class App extends Component {

  render(){
    return (
      <div className="App">
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
