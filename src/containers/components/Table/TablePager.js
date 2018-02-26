import React from 'react'
import Table from './Table'

class TablePager extends React.Component {

	constructor(props) {
    super(props)
    this.state = {
      title: '',
      limit: 0,
    	dataset: [],
    	data: []
    }
  }

	numberClicked = data => {
		this.setState({ data: data.data })
	}

	componentWillReceiveProps = props => {
		const { title, limit, data } = props
    if (limit == null || data == null ) return null
  	let dataset = null
  	if (data.length > 0) {
  		// PAGES
  		const array = []
			const size = limit || 20
			for (var i = 0; i < data.length; i += size) {
    		const subArray = data.slice(i, i + size)
    		array.push(subArray)
			}

			const style = {
				display: 'inline-block'
			}

  		dataset = array.map( (data, index) => {
				return <button 
					key={index}
					style={style}
					onClick={ () => this.numberClicked({data}) }
				>{index}</button>
			})

      if (dataset.length === 1) {
        dataset = null
      }

  		this.setState({ 
        title: title,
        limit: limit,
  			dataset: dataset,
  			data: array[0]
  		})
  	}
	}

  render() {
  	const { title, dataset, data } = this.state
  	return (
     	<div>
        <br /><b>{title}</b>
				<Table data={data}/>
        {dataset}
      </div>
   )
  }
}

export default TablePager