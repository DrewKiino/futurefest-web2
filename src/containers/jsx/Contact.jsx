import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import classes from "./Contact.css";

class Contact extends Component {
  render(){
    return(
      <div>
        <NavigationBar />
        <p className={classes.containerContact}> Contact Page </p>
      </div>
    )
  }
}

export default Contact;
