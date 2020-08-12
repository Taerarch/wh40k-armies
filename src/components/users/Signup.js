import React, {useCallback, useState} from 'react';
import {withRouter} from 'react-router';
import auth from '../firebase/Base.js';
import '../css/User.css'



const SignUp = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    try {
      await auth
        .auth()
        .createUserWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  }, [history]);


  return (
    <div className="main">
      <div className="userPage">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div>
            <label>
              Email:
              <input className="form" value={email} type="email" placeholder="Email" />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input className="form" value={password} type="password" placeholder="Password" />
            </label>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default withRouter(SignUp);
