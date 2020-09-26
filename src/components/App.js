import React from 'react';
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
import ArmyShow from './ArmyShow'
import ArmyInput from './firebase/Armyinput'
import './css/General.css'



function App() {

  return (
      <AuthProvider>
        <Router>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <PrivateRoute path='/Create' exact component={Create} />
            <PrivateRoute path='/Profile' exact component={Profile} />
            <Route path='/Login' exact component={Login} />
            <Route path='/Signup' exact component={Signup} />
            <PrivateRoute path='/Armyinput' exact component={ArmyInput}/>
            <Route path='/SearchResults/:query' exact component={SearchResults} query={<Search />}/>
          </Switch>
        </Router>
      </AuthProvider>
  );
}

export default App;
