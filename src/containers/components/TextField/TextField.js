import React from 'react';
import classes from './TextField.css';

const TextField = (props) => {
	return(
		<div className={classes.TextField}>
			<div id={classes.title}>{props.title}</div>
			<input 
				value={props.value}
				onChange ={ (event) => props.onChange(event.target.value) }
			/>
		</div>
	)
}

export default TextField
