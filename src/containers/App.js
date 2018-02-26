import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl, ButtonToolbar, Button, Glyphicon} from 'react-bootstrap';
import classes from './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';

class App extends Component {

	// constructor(props) {
	// 	super(props)
	// }

	componentWillMount() {
	}

	componentDidMount() {
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true
	}

	componentWillUpdate(nextProps, nextState) {
	}

	componentDidUpdate() {
	}

  state = {
  }

	constructor(props){
	super(props);
	this.state = {
		displayName: '',
		email:'',
		newPassword:'',
		conNewPassword:''
	}
}

saveChanges(){
	console.log('current state', this.state);
}

cancelChanges(){
	this.setState({
		displayName: '',
		email:'',
		newPassword:'',
		conNewPassword:''
	});
}

valStateDisplayName(){
	const lengthDN = this.state.displayName.length;
	let val = lengthDN === 0 ? null : (lengthDN < 10 ? 'error':
	(lengthDN >= 10 ? 'success':'') );
	return val
}

valStateEmail(){
	const lengthE = this.state.email.length;
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let val = lengthE === 0 ? null:( re.test(this.state.email) ?
	'success': 'error' );
	return val;
}

valStatePassword(){
	const npword = this.state.newPassword;
	const cnpword = this.state.conNewPassword;
 let val = ((npword === '') || (cnpword === '')) ? null : (
	 ((npword !== cnpword)&& (npword !== '') && (cnpword !== '')) ? 'error' :
	 (((npword === cnpword) && (npword !== '') && (cnpword !== '')) ? 'success': '')
 );
 return val;
}


  render() {
    return (
			<div className={classes.App}>
				<div className={classes.appContainer}>

					<div className={classes.appContainerNav}>
						<NavigationBar />
					</div>

					<div className={classes.appContainerProfile}>
						<div className={classes.appContainerProfileDiv}>

							<div className={classes.appContainerProfileImg}>
								<img alt=""/>
							</div>

							<div className={classes.appContainerProfileBtn}>
								<label className="btn btn-default">
									<input type="file" className={classes.hides}/><Glyphicon glyph = "circle-arrow-up"> </Glyphicon> Upload Image
								</label>
							</div>

						</div>
					</div>

					<div className={classes.appContainerForm}>

						<div className={classes.appContainerTitle}>
							<h4> Edit Your Profile </h4>
						</div>

						<form>
							<FormGroup validationState={this.valStateDisplayName()}>
								<ControlLabel> Display Name </ControlLabel>
								<FormControl
									type="text"
									placeholder ="Enter Display Name"
									className = {classes.appContainerInputBox}
									value={this.state.displayName}
									onChange={event => {this.setState({displayName:event.target.value})}}
								/>

								<FormControl.Feedback />
            			<div className={classes.appContainerFormValCheck}>
              		{
                		(this.valStateDisplayName() === "error") ?
                		<div> Display Name must contain 10 characters!</div>
                		: <div> </div>
              		}
            		 </div>
          		</FormGroup>

							<FormGroup validationState={this.valStateEmail()}>

								<ControlLabel> Email </ControlLabel>
								<FormControl
									type = "text"
									placeholder= "Enter Email Address"
									className = {classes.appContainerInputBox}
									value={this.state.email}
									onChange={event => {this.setState({email:event.target.value})}}
								/>

							 <FormControl.Feedback />
            		<div className={classes.appContainerFormValCheck}>
              		{
                		(this.valStateEmail() === "error") ?
                		<div> Email is not valid!</div>
                		: <div> </div>
              		}
            	</div>
          		</FormGroup>

							<FormGroup validationState={this.valStatePassword()}>

							<ControlLabel> New Password </ControlLabel>
							<FormControl
								type = "password"
								placeholder ="Enter New Password"
								className = {classes.appContainerInputBox}
								value={this.state.newPassword}
								onChange={event => {this.setState({newPassword:event.target.value})}}
							/>
							<FormControl.Feedback />
		           <div className={classes.appContainerFormValCheck}>
		           </div>
		       		</FormGroup>

						  <FormGroup validationState={this.valStatePassword()}>
								<ControlLabel> Confirm New PassWord </ControlLabel>
								<FormControl
									type = "password"
									placeholder ="Enter New Password"
									className = {classes.appContainerInputBox}
									value={this.state.conNewPassword}
									onChange={event => {this.setState({conNewPassword:event.target.value})}}
								/>
								<FormControl.Feedback />
								  <div className="app-container-form-valCheck">
								    {
								      (this.valStatePassword() === "error") ?
								      <div> passwords do not match!</div>
								      : <div> </div>
								    }
								  </div>
					    </FormGroup>

								<div className={classes.appContainerFormButtons}>
									<ButtonToolbar>
										<Button
											bsSize="small"
											onClick={() => this.cancelChanges()}
										>
											Clear
										</Button>

										<Button
											className={classes.purpleBackground} bsSize="small"
											onClick={() => this.saveChanges()}
										>
											SAVE CHANGES
										</Button>
								</ButtonToolbar>
							 </div>
					 </form>
				 </div>
			 </div>
			</div>
    );
  }
}

export default App;
