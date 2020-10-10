import React, { Component, Fragment } from 'react'

class TodoItem extends Component {
	constructor(props) {
		super(props)
		this.handleDeleteItem = this.handleDeleteItem.bind(this)
	}
	render() {
		console.log( 'child render')
		return (
			<Fragment>
				<div onClick={this.handleDeleteItem}>
					{this.props.title}{this.props.content}
				</div>
			</Fragment>
		)
	}
	handleDeleteItem(e) {
		this.props.handleDelete(this.props.index)
	}
}

export default TodoItem;