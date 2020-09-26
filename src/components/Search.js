import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {db} from './firebase/Base'
import './css/Search.css'

function Search() {
  const [armies, setArmies] = useState([])

  React.useEffect(() => {
    return db.collection('armies').onSnapshot((snapshot) => {
      const armiesData = [];
      snapshot.forEach(doc => armiesData.push({ ...doc.data(), id: doc.id}));
      setArmies(armiesData);
    });
  }, [])

  return (
    <div id="search">
      <h2>All Armies</h2>
      {armies.map(army =>
        <h5 key={army.armyName}>
          <Link to={{pathname: '/ArmyShow', armyProps:{army}}} alt={army.armyName}><p>{army.armyName}</p></Link>
        </h5>
      )}
    </div>
  )
}


export default Search
