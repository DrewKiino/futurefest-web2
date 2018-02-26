import React, { Component } from 'react';
import classes from './Artist.css'
import TextField from '../components/TextField/TextField'
import FileSelector from '../components/FileSelector/FileSelector'
import CheckBox from '../components/CheckBox/CheckBox'
import { post } from 'axios';

/*
POST /song-upload2
{
    "filename": "song.mp3",
    "contentType": "audio/mp3",
    "title": "My Song",
    "artistID": 1234,
    "isSet": false
}
Response
{
    "uploadUrl": "https://someplace.com/",
    "somemoredata": "data"
}
*/
class Artist extends Component {

	state = {
		artistId: 5660980839186432,
		filename: 'overlay.png',
		contentType: 'image/png',
		format: 'overlay'
	}

	onChange = (key, value) => {
		const state = {}
		state[key] = value
		this.setState(state)
	}

  /// POST
  /// { 
  ///   artistId: '5660980839186432',
  ///   filename: 'overlay.png',
  ///   contentType: 'image/png' 
  ///   format: 'overlay',
  ///   file: ***BINARY FILE***
  /// }
	onSubmit = (file) => {
		const { artistId, filename, contentType, format } = this.state
	  const url = 'http://localhost:6499/file/fupload'
	  // const url = 'https://us-central1-lustrous-spirit-170901.cloudfunctions.net/song-upload3'
    const form = new FormData();
    form.append('artistId', artistId)
    form.append('filename', filename)
    // TODO: update -> form.append('format', format)
    form.append('type', format)
    form.append('contentType', contentType)
    form.append('file', file)
    const config = {
			headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json',
    	}
    }
    post(url, form, config)
    .then ( response => {
    	console.log(response)
    })
    .catch ( error => {
    	console.log(error)
    })
	}

	render() {
		const { artistId, filename, contentType, format } = this.state
		return(
			<div className = {classes.container}>
				<TextField 
					title='Artist ID'
					value={artistId}
					onChange={ (text) => this.onChange('artistId', text) }
				/>
				<TextField 
					title='File Name'
					value={filename}
					onChange={ (text) => this.onChange('filename', text) }
				/>
				<TextField 
					title='Content Type'
					value={contentType}
					onChange={ (text) => this.onChange('contentType', text) }
				/>
				<TextField 
					title='Format'
					value={format}
					onChange={ (text) => this.onChange('format', text) }
				/>
				<CheckBox
					title='isSet'
				/>
				<FileSelector 
					title = 'Upload'
					onSubmit = { (file) => this.onSubmit(file) }
				/>
			</div>
		)
	}
}

export default Artist
