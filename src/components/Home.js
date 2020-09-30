import React from 'react'
import Search from './Search.js'
import Factions from './Factions.js'
import './css/Home.css'


function Home() {
    return (
      <div className="main">
        <div className="main">
          <h1>Warhammer 40k BattleGround</h1>
          <Factions />
          <Search />
        </div>
      </div>
    )
}



export default Home;
