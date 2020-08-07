import React, {Component} from 'react'
import './css/Search.css'
import {ChaosDemons, ChaosKnights, ChaosSpaceMarines, CrimsonFists, Custodes, Deathguard, Drukhari, Eldar, GenestealerCultists, Harlequins, ImperialGuard, ImperialKnight, Necrons, Orks, SistersOfBattle, Tau, ThousandSons, Tyranids} from "./ImageList"

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
  }

  saveQuery = (query) => {
    this.setState({
      query: query
    })
  }

render() {
    return (
        <div id="army-box">
          <ChaosSpaceMarines/><ChaosDemons/><ChaosKnights/><CrimsonFists/><Custodes/><Deathguard/><Drukhari/><Eldar/><GenestealerCultists/><Harlequins/><ImperialGuard/><ImperialKnight/><Necrons/><Orks/>
          <SistersOfBattle/><Tau/><ThousandSons/><Tyranids/>
        </div>
    )
  }
}


export default Search
