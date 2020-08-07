import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import firebase, {db, storage} from './firebase/Base'
import {ArmyInput} from './firebase/Armyinput'
import trimJSON from './helpers/armyConverter'
import './css/Create.css'


function Create() {
  const [armies, setArmies] = useState([])
  const [newArmy, setNewArmy] = useState('')

  React.useEffect(() => {
    return db.collection('armies').onSnapshot((snapshot) => {
      const armiesData = [];
      snapshot.forEach(doc => armiesData.push({ ...doc.data(), id: doc.id}))
      setArmies(armiesData)
    });
  }, [])

  const onCreate = () => {
    const armyJSONconvert = trimJSON(newArmy)
    db.collection('armies').add(JSON.parse(armyJSONconvert))
  }

// Take text input
  return (
    <div class="create">
      <h3>Input your html export</h3>
      <input name={newArmy} onChange={(e) => setNewArmy(e.target.value)}/>
      <button onClick={onCreate}>Create List</button>
      {armies.map(army => (
        <h5 key={army.armyName}>
          <ArmyInput army={army}/>
          <Link to={{pathname: '/ArmyShow', armyProps:{army}}} alt={army.armyName}><p>Showpage</p></Link>
        </h5>
      ))}
    </div>
  )
}



export default Create;
