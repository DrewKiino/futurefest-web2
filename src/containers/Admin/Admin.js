import React, { Component } from 'react';
import classes from './Admin.css'
import TablePager from '../components/Table/TablePager'
import Button from '../components/Button/Button'

class Admin extends Component {

	state = {
		artists: [],
		tracks: []
	}

	componentDidMount() {
		const state = Object.assign(this.state, global.state)
		this.setState(state)
 	}

  componentWillUnmount() {
  }
	onReload = () => {
		global.managers.resource.get('artist')
		global.managers.resource.get('song')
	}

	render() {
		const state = Object.assign(this.state, global.state)
    const { artists, tracks } = state
		return(
			<div className = { classes.headerContainer }>
				<Button title='Reload Data' onClick={()=>this.onReload()}/>
				<div className = { classes.contentContainer }>
					<TablePager title='Artists' limit={10} data={artists}/>
					<TablePager title='Tracks' limit={10} data={tracks}/>
				</div>
			</div>
		)
	}
}

export default Admin
