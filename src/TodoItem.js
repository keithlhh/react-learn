import React, { Component, Fragment } from 'react'

class TodoItem extends Component {
	constructor(props) {
		super(props)
		this.handleDeleteItem = this.handleDeleteItem.bind(this)
	}

	shouldComponentUpdate() {
		return false
	}
	UNSAFE_componentWillMount() {
		console.log('UNSAFE_componentWillMount')
	}
	componentDidMount() {
		console.log('componentDidMount')
	}
	UNSAFE_componentWillUpdate() {
		console.log('Unfase_componentwillupdate')
	}

	UNSAFE_componentWillReceiveProps() {
		console.log("UNSAFE_componentwillreceiveprops")
	}
	componentWillUnmount() {
		console.log('componentwillunmount')
	}
	// getSnapshotBeforeUpdate() {
	// 	console.log('getSnapshotBeforeUpdate')
	// 	return 'hello world'
	// }
	componentDidUpdate(a,b,c) {
		console.log('hello	',a,b,c)
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