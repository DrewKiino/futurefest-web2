import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import classes from './partnerLink2.css';

class partnerLink2 extends Component {
  render(){
    return(
      <div>
        <NavigationBar />
        <p className={classes.containerPartnerLink2}> Link 2 Page </p>
      </div>
    )
  }
}

export default partnerLink2;
