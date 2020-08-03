import React from 'react';
import firebase from './firebase/Base'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home'
import Profile from './users/Profile'
import Nav from './Nav'
import SearchResults from './SearchResults'
import Search from './Search'
import Login from './users/Login'
import Signup from './users/Signup'
import Create from './Create'
import {AuthProvider} from './users/Auth'
import PrivateRoute from './users/PrivateRoute'
import {ArmyInput} from './firebase/Armyinput'
import ArmyShow from './ArmyShow'



function App() {

  const [armies, setArmies] = React.useState([])
  const [newArmyName, setNewArmyName] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection('armies').get()
      setArmies(data.docs.map(doc => ({ ...doc.data(), id: doc.id})))
    }
    fetchData();
  }, [])

  const onCreate = () => {
    const db = firebase.firestore()
    db.collection('armies').add({name: newArmyName})
  }

  return (
    <AuthProvider>
      <Router>
        <Nav />
          <ul>
            <input value={newArmyName} onChange={(e) => setNewArmyName(e.target.value)}/>
            <button onClick={onCreate}>Create</button>
            {armies.map(army => (
              <li key={army.name}>
                <ArmyInput army={army} />
              </li>
            ))}
          </ul>

        <Switch>
          <Route path='/' exact component={Home} />
          <PrivateRoute path='/Create' exact component={Create} />
          <PrivateRoute path='/Profile' exact component={Profile} />
          <Route path='/Login' exact component={Login} />
          <Route path='/Signup' exact component={Signup} />
          <Route path='/SearchResults/:query' exact component={SearchResults} query={<Search />}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
