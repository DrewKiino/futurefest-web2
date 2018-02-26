import React from 'react'
import { post } from 'axios';
import classes from './FileSelector.css'

class FileSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file: null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    // this.fileUpload(this.state.file).then((response)=>{
    //   console.log(response.data);
    // })
    this.props.onSubmit(this.state.file)
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  /// POST
  /// { 
  ///   artistId: '5660980839186432',
  ///   type: 'overlay',
  ///   filename: 'overlay.png',
  ///   contentType: 'image/png' 
  ///   file: ***BINARY FILE***
  /// }
  fileUpload(file) {
    const url = 'https://us-central1-lustrous-spirit-170901.cloudfunctions.net/song-upload3'
    const formData = new FormData();
    formData.append('file', file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return  post(url, formData,config)
  }

  render() {
    const { title } = this.props
    return (
      <div className={classes.FileSelectorContainer}>
        <form className={classes.FileUpload} onSubmit={this.onFormSubmit}>
          <input type="file" onChange={this.onChange} />
          <button type="submit">{title}</button>
        </form>
      </div>
   )
  }
}

export default FileSelector