import React, {Component} from 'react'
import './css/Factions.css'
import {Daemons, ChaosKnights, ChaosSpaceMarines, AdeptusAstartes, AdeptusCustodes, Deathguard, Drukhari, Craftworlds, GenestealerCults, Harlequins, AstraMilitarum, ImperialKnights, Necrons, Orks, AdeptaSororitas, TauEmpire, ThousandSons, Tyranids, AdeptusMechanicus, Ynnari} from "./ImageList"

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
        <ChaosSpaceMarines/><Daemons/><ChaosKnights/><AdeptusAstartes/><AdeptusCustodes/><Deathguard/><Drukhari/><Craftworlds/><GenestealerCults/><Harlequins/><AstraMilitarum/><ImperialKnights/><Necrons/><Orks/>
        <AdeptaSororitas/><TauEmpire/><ThousandSons/><Tyranids/><AdeptusMechanicus/><Ynnari/>
      </div>
    )
  }
}


export default Factions
