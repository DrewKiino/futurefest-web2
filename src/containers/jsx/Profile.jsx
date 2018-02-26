import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import classes from './Profile.css';

class Profile extends Component {
  render(){
    return(
      <div>
        <NavigationBar />
        <p className={classes.containerProfile}> Profile Page </p>
      </div>
    )
  }
}

export default Profile;
