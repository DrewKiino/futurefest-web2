import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import classes from "./partnerLink1.css";

class partnerLink1 extends Component {
  render(){
    return(
      <div>
        <NavigationBar />
        <p className={classes.containerPartnerLink1}> Link 1 page </p>
      </div>
    )
  }
}

export default partnerLink1;
