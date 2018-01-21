import "babel-polyfill"
import boostrap from 'bootstrap'
import bootstrapSelect from 'bootstrap-select/dist/js/bootstrap-select.js'
import ReactDOM from 'react-dom'
import React from 'react'

// Basic Rendering

const renderHello = React.createElement('h1',{'className':'text-center'},'Hello React')
// ReactDOM.render(renderHello, document.getElementById('app'))


// Rendering from data

const dataItems = ['Item1','Item2','Item3','Item4']

// const elementItems = React.createElement(
// 	'ul',
// 	{'className':'dataItems'},
// 	dataItems.map((item, i) => 
// 		React.createElement('li', {'key': i}, item)
// 	)
// )

// ReactDOM.render(elementItems, document.getElementById('app'))


// Class component

// class ElementItems extends React.Component {
// 	render() {
// 		return React.createElement('ul', {'className':'dataItems'},
// 			this.props.dataItems.map( (dataItem, i) => 
// 				React.createElement('li', {key: i}, dataItem),
// 				console.log(this)
// 			)
// 		)
// 	}
// }

// Functional Component (Stateless) via a factory

// const ElementItems = props => 
// 	React.createElement ('ul', {className: 'dataItems'},
// 		props.dataItems.map( (dataItem, i) =>
// 			React.DOM.li({key : i}, dataItem)
// 			console.log(this)
// 		)
// 	)

// ReactDOM.render(
// 	React.createElement(ElementItems, {dataItems}, null),
// 	document.getElementById('app')
// )

// Factories

const ElementItems = React.createElement(
	'ul', {'className':'dataItems'},
	dataItems.map( (item, key) => 
		React.DOM.li({key}, item)
	)
)

ReactDOM.render(
	ElementItems,
	document.getElementById('app')
)


