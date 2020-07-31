import React, {Component} from 'react';
import './css/nav.css'
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
          <Link to="users/Profile">
            Profile
          </Link>
        </div>
      </nav>
    )
  }
}


export default Nav
