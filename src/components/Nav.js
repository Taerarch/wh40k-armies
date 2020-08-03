import React, {Component} from 'react';
import './css/Nav.css'
import {Link} from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <nav id="nav-bar">
        <div>
          <Link to="/">
            Home
          </Link>
          |
          <Link to="/Create">
            Create
          </Link>
          |
          <Link to="Profile">
            Profile
          </Link>
          |
          <Link to="Login">
            Login
          </Link>
          |
          <Link to="Signup">
            SignUp
          </Link>
        </div>
      </nav>
    )
  }
}


export default Nav
