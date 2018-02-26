import React from 'react';
import classes from './Button.css';

const Button = (props) => {
	return(
		<div className={props.style || classes.Button}>
			<button onClick={ () => props.onClick() }>{props.title}</button>
		</div>
	)
}

export default Button
