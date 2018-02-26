import React, { Component } from 'react';
import classes from './Container.css';

class Container extends Component {

	state = {
	}

	render() {
		return (
			<div className={classes.Container}>
				<div className={classes.Content}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Container;
