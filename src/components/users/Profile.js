import React, {useContext} from 'react';
import '../css/Profile.css'
import firebase from '../firebase/Base.js'
import {AuthContext} from './Auth'



const Profile = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <div class="main">
      <h2>{currentUser.email}</h2>

      <h1>This will be the profile page</h1>
    </div>
  )
}

export default Profile
