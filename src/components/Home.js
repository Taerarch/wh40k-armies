import React, { Component } from 'react'
import Search from './Search.js'
import Factions from './Factions.js'
import './css/Home.css'


class Home extends Component {

  render() {
    return (
      <div className="main">
        <h1>Warhammer 40k BattleGround</h1>
        <Factions />
        <Search />
      </div>
    )
  }
}



export default Home;
