import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import firebase from '../firebase/Base.js';
import {AuthContext} from './Auth'
import '../css/User.css'

// firebase.initializeApp(firebaseConfig);

const Login = ({history}) => {
  const handleLogin = useCallback(async event => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  }, [history]);

const {currentUser} = useContext(AuthContext);


if (currentUser) {
  return <Redirect to="/" />;
}


  return (
    <div className="main">
      <div className="userPage">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <div>
            <label>
              Email:
              <input className="form" name="email" type="email" placeholder="Email" />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input className="form" name="password" type="password" placeholder="Password" />
            </label>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  )
}


export default withRouter(Login);
