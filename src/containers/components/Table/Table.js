import React from 'react'
import classes from './Table.css'

class Table extends React.Component {
  render() {
  	const { data } = this.props
  	let header = null
  	let rows = null
  	if (data.length > 0) {
  		const keys = Object.keys(data[0])
  		header = keys.map( key => {
				return <td key={key}>{key}</td>
			})
			rows = data.map( (item, index) => {
  			const keys = Object.keys(item)
				return (<tr key={index}>
					{keys.map( key => {
						const value = item[key]
						return <td key={value}>{value}</td>
					})}
				</tr>)
			})
  	}
  	return (
     	<div>
				<table className={classes.Table}>
					<tbody>
						<tr className={classes.Header}>
						{header}
						</tr>
						{rows}
					</tbody>
				</table>
      </div>
   )
  }
}

export default Table