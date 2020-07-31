import React, { Component } from 'react'
import Search from './Search.js'
import './css/home.css'


class Home extends Component {
  render() {
    return (
      <div class="main">
        <div>
          <h1>Warhammer 40k Armies</h1>
          <Search />
        </div>
      </div>
    )
  }
}



export default Home;
