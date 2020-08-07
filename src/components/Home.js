import React, { Component } from 'react'
import Search from './Search.js'
import Create from './Create.js'
import './css/Home.css'


class Home extends Component {

  render() {
    return (
      <div className="main">
        <div>
          <h1>Warhammer 40k Armies</h1>
          <Search />
          <Create />
        </div>
      </div>
    )
  }
}



export default Home;
