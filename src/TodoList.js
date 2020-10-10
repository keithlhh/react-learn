import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import { Button, Input} from 'antd';
import 'antd/dist/antd.css'
import store from './store'
var _ = require('lodash');
const  axios = require('axios')


class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: store.getState().list
		}
		this.handleDelete = this.handleDelete.bind(this)
	}
	render() {
		return (
			<Fragment>
				<Input style={{width: '50%'}} type="text" onChange={this.handleInputChange.bind(this)} value={this.state.inputValue} />
				<Button type="primary" onClick={this.handleClickSubmit.bind(this)}>提交</Button>
				{/* <List
				bordered
				style={{width: '40%', marginTop: '10px'}}
				dataSource={this.state.list}
				renderItem={item => (
					<List.Item>{item}</List.Item>
				)}
				/> */}
				<ul>
					{
						this.state.list.map((item, index) => {
							return (
								<TodoItem
								content={item}
								key={index}
								handleDelete={this.handleDelete}
								index={index}
								/>
								)
							})
						}
				</ul>
			</Fragment>
		)
	}
	// componentDidMount() {
	// 	axios.get('http://localhost:2000/list.json').then( (res) => {
	// 		console.log(res)
	// 	})
	// }
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