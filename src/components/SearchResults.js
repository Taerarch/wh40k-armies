import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {db} from './firebase/Base'
import {ArmyInput} from './firebase/Armyinput'
import './css/Search-results.css'


function SearchResults() {
  const [armies, setArmies] = useState([])

  React.useEffect(() => {
    return db.collection('armies').onSnapshot((snapshot) => {
      const armiesData = [];
      snapshot.forEach(doc => armiesData.push({ ...doc.data(), id: doc.id}));
      setArmies(armiesData);
    });
  }, [])


    return (
      <div className="main">
        <div className="main">
          <h1>{window.location.href.split('/')[4]}</h1>
          <div id="listArmies">
            {armies.filter(army => army.armyFaction.split(' ').join('') === window.location.href.split('/')[4]).map(army => (
              <h5 key={army.armyName}>
                <Link to={{pathname: '/ArmyShow', armyProps:{army}}} alt={army.armyName}><h3>{army.armyName}</h3></Link>
              </h5>
            ))}
          </div>
        </div>
      </div>
    )
}

export default SearchResults;
