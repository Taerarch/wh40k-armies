import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import firebase from '../firebase/Base.js';
import {AuthContext} from './Auth'
import '../css/User.css'



const SignUp = ({history}) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
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
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
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
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default withRouter(SignUp);
