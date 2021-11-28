import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {

	state={
		title: '',
        content: '',
        date: new Date(),
        userSelected: '',
        users: [],
        editing: false,
        _id: ''
	}	

	async componentDidMount() {
        console.log(this.props.match && this.props.match.params.id)
		const res = await axios.get('http://localhost:4000/api/users');
		this.setState({
			users: res.data.map(user => user.username),
			userSelected: res.data[0].username
			})
	}

	onSubmit = async (e) => {
		e.preventDefault();
		const newNote = {
			title:this.state.title,
			content:this.state.content,
			date: this.state.date,
			author: this.state.userSelected
		}
		await axios.post('http://localhost:4000/api/notes', newNote);
		window.location.href = '/';
	}

	onInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onChangeDate = date => {
		this.setState({date});
	}

	render() {
		return (
			<div className="col-md-6 offset-md-3">
				<div className="card card-body">
					<h4>Create Note</h4>
					{/* SELECT USER */}
					<div className="form-group">
						<select
							className="form-control"
							name="userSelected"
							onChange={this.onInputChange}
						>
						{
							this.state.users.map(user => 
								<option key={user} value={user}>
									{user}
								</option>)
						}

						</select>
					</div>

					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Title"
							onChange={this.onInputChange}
							name="title"
							value={this.state.title}
							required
							/>
					</div>

					<div className="form-group">
						<textarea
							type= "text"
							name="content"
							className="form-control"
							placeholder="Content"
							onChange={this.onInputChange}
                            value={this.state.content}
							required
							>

						</textarea>
					</div>
					<div className="form-group">
						<DatePicker 
							className="form-control"
							selected={this.state.date}
							onChange={this.onChangeDate}
							/>
					</div>


					<form onSubmit={this.onSubmit}>
						<button type="submit" className="btn btn-primary">
							Entrar
						</button>
					</form>
				</div>
			</div>
		)
	}
}