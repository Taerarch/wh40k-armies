import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom';
import {db} from './firebase/Base'
import {ArmyInput} from './firebase/Armyinput'
import trimJSON from './helpers/armyConverter'
import './css/Create.css'
import {AuthContext} from './users/Auth'



function Create() {
  const [armies, setArmies] = useState([])
  const [newArmy, setNewArmy] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const {currentUser} = useContext(AuthContext);


  React.useEffect(() => {
    return db.collection('armies').onSnapshot((snapshot) => {
      const armiesData = [];
      snapshot.forEach(doc => armiesData.push({ ...doc.data(), id: doc.id}))
      setArmies(armiesData)
    });
  }, [])

  const onCreate = () => {
    const armyJSONconvert = trimJSON(newArmy, newDescription, currentUser.email)
    db.collection('armies').add(JSON.parse(armyJSONconvert))
  }

  const readSingleFile = (importedFile) => {
  let f = importedFile.target.files[0];

  if (f) {
    const r = new FileReader();
    r.onload = function(e) {
      let contents = e.target.result;
      setNewArmy(contents)
    }
    r.readAsText(f);
  } else {
    alert("Failed to load file");
  }
}

// Take text input
  return (
    <div id="create">
      <div id="createArmy">
          <h3>Import List</h3>
          <ol>
            <li>Make a legal list within Battlescribe.</li>
            <li>Export the list with the Export as HTML button.</li>
            <li>Select that file to import your army list.</li>
          </ol>
          <input type="file" id="armyInput" name={newArmy} onChange={(e) => readSingleFile(e)}/>
          <br></br>
          <button id="createList" onClick={onCreate}>Create List</button>
      </div>
      <div id="description">
        <h3>Write a Description</h3>
        <textarea id="descriptionInput" name={newDescription} onChange={(e) => setNewDescription(e.target.value)}/>

      </div>
      <div id="listArmies">
        <h3>List of your armies</h3>
        {armies.filter(army => army.userName === currentUser.email).map(army =>
          <h5 key={army.armyName}>
            <ArmyInput army={army}/>
            <Link to={{pathname: '/ArmyShow', armyProps:{army}}} alt={army.armyName}><p>Showpage</p></Link>
          </h5>
        )}
      </div>
    </div>
  )
}



export default Create;
