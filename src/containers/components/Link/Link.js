import React, { Component } from 'react';
import classes from './Link.css';

const Link = (props) => {
	return(
		<div className={classes.Link}>
			<a href={props.url}>{props.text}</a>
		</div>
	)
}

export default Link
