import React, { Component, Fragment } from 'react'

class TodoItem extends Component {
	constructor(props) {
		super(props)
		this.handleDeleteItem = this.handleDeleteItem.bind(this)
	}

	shouldComponentUpdate() {
		return false
	}
	componentWillMount() {
		console.log('componentWillMount')
	}
	componentDidMount() {
		console.log('componentDidMount')
	}
	render() {
		console.log( 'child render')
		return (
			<Fragment>
				<div onClick={this.handleDeleteItem}>
					{this.props.content}
				</div>
			</Fragment>
		)
	}
	handleDeleteItem(e) {
		this.props.handleDelete(this.props.index)
	}
}

export default TodoItem;