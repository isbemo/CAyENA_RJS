import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

	state = {
		users:[],
		username:[]
	}

	getUsers = async () => {
		const res = await axios.get('http://localhost:4000/api/users');
		this.setState({users: res.data});
	}

	onChageUsername = (e) => {
		this.setState({
			username:e.target.value
		})
	}

	onChangePhone = (e) => {
		this.setState({
			phone:e.target.value
		})
	}


	onChangePassword = (e) => {
		this.setState({
			password:e.target.value
		})
	}

	onSubmit = async e => {
		e.preventDefault();
		await axios.post('http://localhost:4000/api/users', {
			username: this.state.username,
			phone: this.state.phone,
			password: this.state.password
		})
		this.setState({
			username: '',
			phone:'',
			password:''
		});
		this.getUsers();
		window.location.href = '/';
	}

	async componentDidMount() {
		this.getUsers();
		console.log(this.state.users)
	}

	deleteUser = async (id) => {
		await axios.delete('http://localhost:4000/api/users/' + id)
		this.getUsers();
	}


	render() {
		return (
				<div className="container">
					
					<div className="row justify-content-evenly">
						<div className="col-md-4">
							<div className="card card-body">
								<h3>
									Registro
								</h3>
								<form onSubmit={this.onSubmit}>
									<div className="navbar navbar-light bg-light">
										<input 
											type="text" 
											placeholder="Ingrese Id asignada"
											className="form-control" 
											onChange={this.onChageUsername}
											value= {this.state.username}
											/>
									</div>
									<div className="navbar navbar-light bg-light">
										<input 
											type="text" 
											placeholder="Ingrese telefono"
											className="form-control" 
											onChange={this.onChangePhone}
											value= {this.state.phone}
										/>
									</div>
									<div className="navbar navbar-light bg-light">
										<input 
											type="password" 
											placeholder="Ingrese contraseña"
											className="form-control" 
											onChange={this.onChangePassword}
											value= {this.state.password}
										/>
									</div>
									<div className="navbar navbar-light bg-light">
										<button type="submit" className="btn btn-primary">
											Registrar
										</button>
									</div>
								</form>
							</div>
						</div>
						<div className="col-4">
							<img
						        src="http://1.bp.blogspot.com/_a5mK001oySU/TShQMXc9SsI/AAAAAAAAvUg/5YjnlWXq2T8/s1600/3.png"
						        className="figure-img img-fluid"
						        alt=""
						        width="500px"
						        />
						</div>
					</div>
				</div>
		)
	}
}