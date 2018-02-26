import React, { Component } from 'react';
import classes from './Login.css';
import TextField from '../components/TextField/TextField';
import CheckBox from '../components/Checkbox/CheckBox';
import Link from "../components/Link/Link";
import Button from "../components/Button/Button";

class Login extends Component {

	render() {
		return(
			<div className={classes.Login}>
					<p/><h1>Sign In to Futurefest VR</h1><p/>
					If you don't already have an account. <a href=''>Sign up</a> here.<p/><br/>
					<div className={classes.inputContainer}>

						<TextField title='EMAIL' value=''/><br/>
						<TextField title='PASSWORD' value=''/><br/>
						<div className={classes.optionsContainer}>
							<div id={classes.rememberMe}>
								<CheckBox title='Remember Me'/>
							</div>
							<div id={classes.forgotPassword}>
								<Link url='google.com' text='Forgot Password?'/>
							</div>
						</div><p/>
						<Button title='Sign In'/>
					</div>
			</div>
		)
	}
}

export default Login
