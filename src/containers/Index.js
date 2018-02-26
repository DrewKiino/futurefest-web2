import React, { Component } from 'react'
import NavigationBar from './NavigationBar/NavigationBar'
import Home from "./Home/Home"
import Artist from "./Artist/Artist"
import Admin from "./Admin/Admin"
import classes from './Index.css'
import ResourceManager from '../managers/ResourceManager'

class Index extends Component {

	pages = [
		'Home',
		'Artist',
		'Admin'
	]

	state = {
		currentPage: this.pages[2],
		pages: this.pages
	}

  constructor(props) {
    super(props)
    global.state = {}

    const resource = {}
    resource.get = this.get
    const managers = {}
    managers.resource = resource

    global.managers = managers

    this.get('artist')
    this.get('song')
  }

  get = (resource) => {
    ResourceManager.get(resource, json => {
      const state = Object.assign(global.state, json)
      global.state = state
      console.log('retrieved '+resource)
      this.forceUpdate()
    })
  }

	setPage = (page) => {
		this.setState({ currentPage: page })
	}

	getPage = (params) => {
		switch(params.currentPage) {
  		case 'Home': return (<Home />)
  		case 'Artist': return (<Artist />)
  		case 'Admin': return (<Admin />)
      default: return
		}
	}

  render = () => {
    const { currentPage, pages } = this.state
    return (
      <div className = { classes.MainContainer } >
        <NavigationBar 
        	currentPage = { currentPage }
        	pages = { pages }
        	onClick = { (page) => this.setPage(page) }
        />
        <div className = { classes.PageContainer } >
        	{ this.getPage({ currentPage }) }
        </div>
      </div>
    )
  }
}

export default Index;
