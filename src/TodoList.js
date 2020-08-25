import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
var _ = require('lodash');

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
	}
	// componentDidUpdate() {
	// 	console.log('componentdidupdate')
	// }
	render() {
		console.log('parent render')
		return (
			<Fragment>
				<input type="text" onChange={this.handleInputChange.bind(this)} value={this.state.inputValue} />
				<button onClick={this.handleClickSubmit.bind(this)}>提交</button>
				<ul>
					{
						this.state.list.map((item, index) => {
							return (
								<TodoItem
									content={item}
									key={index}
									handleDelete={this.handleDelete.bind(this)}
									index={index}
									title="hello"
								/>
							)
						})
					}
				</ul>
			</Fragment>
		)
	}
	handleInputChange(e) {
		e.persist();
		let inputValue = _.cloneDeep(this.state.inputValue)
		const { nativeEvent: { data } } = e
		this.setState({
			inputValue: `${inputValue}${data}`
		})
	}
	handleClickSubmit() {
		let list = _.cloneDeep(this.state.list)
		this.state.inputValue.replace(/^\s*/g, '') !== '' && this.setState({
			list: [...list, this.state.inputValue],
			inputValue: ''
		})
	}
	handleDelete(index) {
		let list = _.cloneDeep(this.state.list)
		list.splice(index, 1)
		this.setState({
			list
		})
	}
}
export default TodoList