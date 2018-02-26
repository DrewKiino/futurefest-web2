import React, { Component } from 'react';
import classes from './SignUp.css';
import TextField from "../components/TextField/TextField";

class SignUp extends Component {

	render() {
		return(
			<div className={classes.SignUp}>
				Create an Account<br/>
				If you already have an account, sign up here.
				<TextField title='EMAIL'/>
				<TextField title='PASSWORD'/>
				<TextField title='RE-ENTER PASSWORD'/>
			</div>
		)
	}
}

export default SignUp
