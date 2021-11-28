import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Inicio extends Component {

	state={
		userSelected: '',
		password: ''
	}

	onSubmit = async (e) => {


	}


	render() {
		return (
			  <div className="bg-image shadow-2-strong" type="text/javascript" src="js/mdb.min.js">
			    <div className="mask d-flex">
			      <div className="container">
			        <div className="row align-items-start">
			          
			          <div className="col align-self-start">
						<img className="col-md-4"src="https://isaiasbemo.files.wordpress.com/2017/06/logoibm.png"
							className="figure-img img-fluid rounded shadow-3 mb-3"
		                    alt=""
		                    width="500px"/>
			          </div>
			          <div className="col-xl-6">
			            <div className="row justify-content-evenly">
			            	<div className="col">
				            	<img
			                    src="http://1.bp.blogspot.com/_a5mK001oySU/TShQMXc9SsI/AAAAAAAAvUg/5YjnlWXq2T8/s1600/3.png"
			                    className="figure-img img-fluid rounded shadow-3 mb-3"
			                    alt=""
			                    width="200px"
			                  />
			                </div>
		                </div>
		                <h1 className="text-light">
		                	¡Bienvenido!
		                </h1>

		                <div className="col form-outline mb-4 rounded-pill" type="text/javascript" src="js/mdb.min.js">
		                	<div className="div navbar-nav ms-auto">
	                            <input type="email" placeholder="Id asignado"className="form-control"/>
		                	</div>
                        </div>
                        <div className="form-outline mb-4 rounded-pill">
                                <input type="password" placeholder="Contraseña" className="form-control"/>
                        </div>
                        	<form onSubmit={this.onSubmit}>
                    		<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
							  <form onSubmit={this.onSubmit}>
								<div className="btn-group me-4" role="group" aria-label="First group">
								    <button type="submit" className="btn btn-primary">
									Entrar 
								    </button>
								</div>
							  </form>
							  <div className="btn-group" role="group" aria-label="Second group">
							    <Link className="btn btn-success" to='/user'>Registrarse</Link>
							  </div>
							</div>
						</form>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
		);
	}
}