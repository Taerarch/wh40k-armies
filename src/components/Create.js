import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {db} from './firebase/Base'
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
    <div id="create">
      <div id="createArmy">
          <h3>Import List</h3>
          <ol>
            <li>Make a legal list within Battlescribe.</li>
            <li>Export the list with the Export as HTML button.</li>
            <li>Copy and paste the contents into this field.</li>
          </ol>
          <textarea id="armyInput" name={newArmy} onChange={(e) => setNewArmy(e.target.value)}/>
          <br></br>
          <button id="createList" onClick={onCreate}>Create List</button>
      </div>
      <div id="description">
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cupiditate, vero. Porro accusantium repellat provident expedita qui dolore voluptas sunt ad id, culpa maiores corrupti reiciendis eligendi, eum aperiam! Tempore?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quia rerum ipsam sapiente magnam repellat enim. Dolor fugit id dolore, laboriosam mollitia porro iste aperiam suscipit, hic, enim ipsam? Saepe.</p>
      </div>
      <div id="listArmies">
        <h3>List of your armies</h3>
        {armies.map(army => (
          <h5 key={army.armyName}>
            <ArmyInput army={army}/>
            <Link to={{pathname: '/ArmyShow', armyProps:{army}}} alt={army.armyName}><p>Showpage</p></Link>
          </h5>
        ))}
      </div>
    </div>
  )
}



export default Create;
