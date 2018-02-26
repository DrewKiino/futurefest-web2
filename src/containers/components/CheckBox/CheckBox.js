import React from 'react';
import classes from './CheckBox.css';

const CheckBox = (props) => {
	return(
		<div className={classes.CheckBox}>
			<input type='checkbox'/>
			<div id={classes.title}>{props.title}</div>
		</div>
	)
}

export default CheckBox
