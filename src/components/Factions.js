import React, {Component} from 'react'
import './css/Factions.css'
import {ChaosDemons, ChaosKnights, ChaosSpaceMarines, CrimsonFists, Custodes, Deathguard, Drukhari, Eldar, GenestealerCultists, Harlequins, ImperialGuard, ImperialKnight, Necrons, Orks, SistersOfBattle, Tau, ThousandSons, Tyranids, AdeptusMechanicus, Ynnari} from "./ImageList"

class Factions extends Component {
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
        <SistersOfBattle/><Tau/><ThousandSons/><Tyranids/><AdeptusMechanicus/><Ynnari/>
      </div>
    )
  }
}


export default Factions
