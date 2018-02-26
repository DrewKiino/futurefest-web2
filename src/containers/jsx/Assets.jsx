import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import classes from './Assets.css';

class Assets extends Component {
  render(){
    return(
      <div>
        <NavigationBar />
        <p className={classes.containerAssets}> Assets Page </p>
      </div>
    )
  }
}

export default Assets;
