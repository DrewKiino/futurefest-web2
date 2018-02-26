import React from 'react';
import Button from '../components/Button/Button'
import classes from './NavigationBar.css'

const NavigationBar = (props) => {
	const { navigationBarStyle, buttonStyle, pages, onClick } = props
	return(
		<div className = { navigationBarStyle || classes.container }>
		{pages.map( title => {
			return <div
				key = { title }
				className = { classes.child }
			><Button
				style = { buttonStyle }
				key = { title }
				title = { title }
				onClick = { () => onClick(title) }
			/></div>
		})}
		</div>
	)
}

export default NavigationBar
