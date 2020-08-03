import React, {useContext} from 'react';
import './css/Nav.css'
import {Link} from 'react-router-dom';
import firebase from './firebase/Base'
import {AuthContext} from './users/Auth'


const Nav = () => {
  const {currentUser} = useContext(AuthContext);


  return (
    <nav id="nav-bar">
    <div>{currentUser ? currentUser.email : 'Please Log In'}</div>
      <div>
        <Link to="/">
          Home
        </Link>
        |

        {currentUser ?
          <div>
            <Link to="/Create">
              Create
            </Link>
            |
            <Link to="Profile">
              Profile
            </Link>
            |
            <button id="logoutB" onClick={() => firebase.auth().signOut()}>Sign Out</button>
          </div> :
          <div>
            <Link to="Login">
              Login
            </Link>
            |
            <Link to="Signup">
              SignUp
            </Link>
          </div>
        }
      </div>
    </nav>
  )
}


export default Nav
