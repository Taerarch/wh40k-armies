import React, { Component } from 'react'
import Search from './Search.js'


class Home extends Component {
  render() {
    return (
      <div id="main">
        <div>
          <h1>Warhammer 40k Armies</h1>
          <Search />
        </div>
      </div>
    )
  }
}



export default Home;
