import React from 'react';
import firebase from './firebase/Base'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home'
import Profile from './users/Profile'
import Nav from './Nav'
import SearchResults from './SearchResults'
import Search from './Search'
import Login from './users/Login'
import Signup from './users/Signup'
import {AuthProvider} from './users/Auth'
import PrivateRoute from './users/PrivateRoute'



function App() {

  const [armies, setArmies] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection('armies').get()
      setArmies(data.docs.map(doc => doc.data()))
    }
    fetchData();
  }, [])

  return (
    <AuthProvider>
      <Router>
        <Nav />
          <ul>
            {armies.map(army => (
              <li key={army.name}>{army.name}</li>
            ))}
          </ul>

        <Switch>
          <PrivateRoute path='/' exact component={Home} />
          <Route path='/Profile' exact component={Profile} />
          <Route path='/Login' exact component={Login} />
          <Route path='/Signup' exact component={Signup} />
          <Route path='/SearchResults/:query' exact component={SearchResults} query={<Search />}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
