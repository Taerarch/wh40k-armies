import React, {useContext} from 'react';
import '../css/Profile.css'
import {AuthContext} from './Auth'



const Profile = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <div class="main">
      <h2>{currentUser.email}</h2>


      <h3>Hello {this.state.name}</h3>
        <form onSubmit={this._handleSubmit}>
          <div>
            <label>Full name:</label>
              <input type="text" id="name" name="name" onChange={this._handleChangeName} value={this.state.content}></input>
          </div>
          <div>
            <input type="submit" value="Edit"></input>
          </div>
        </form>


    </div>
  )
}

export default Profile
