// src/components/UserProfile.js
// The UserProfile component is used to demonstrate the use of Route and Link.

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import './UserProfile.css'

class UserProfile extends Component {
  render() {
    return (
        <div className="userProfile_Body">
          <Header/>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          
          <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

export default UserProfile;