import React from "react";
import Menu from './menu';
import { getBaseURL } from "./common";
import axios from 'axios';
import { showError } from "./message";
import { ToastContainer } from "react-toastify";

export default class InsertProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: []
		}
	}

	updateValue = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	setPhoto = (e) => {
		this.setState({
			[e.target.name]: e.target.files[0]
		});
	}
	componentDidMount() {
		//api call 
		let apiAddress = getBaseURL() + "category.php";
		let options = {
			url: apiAddress,
			method: 'get',
			responseType: 'json'
		};

		axios(options).then((response) => {
			//code in this block will only execute after data is successfully fetch from server
			console.log("response received from api ", response.data);
			let error = response.data[0]['error'];
			if (error !== 'no') {
				//there is error in api response
				showError(error);
			}
			else {
				//there is no error
				//fetch total
				if (response.data[1]['total'] === 0) {
					showError('no category found');
				}
				else {
					//1st delete 2 object from beginning 
					response.data.splice(0, 2);
					//copy data into state array
					this.setState({
						categories: response.data
					});
				}
			}
		}).catch((error) => {
			//code in this block will execute only if data could not be fetched from server. it is error there could be mostly 2 reasons for it.
			// 1) you are offline 
			// 2) server is offline or api address is wrong
			showError();

		});
	}
	insertProduct = (e) => {
		console.log(this.state); //to confirm all input is stored in state variable
		e.preventDefault();
		
	}
	render() {
		return (<div className="wrapper">
			<ToastContainer />
			<Menu />
			<div className="main">
				<nav className="navbar navbar-expand navbar-light navbar-bg">
					<a className="sidebar-toggle js-sidebar-toggle"><i className="hamburger align-self-center" /></a>
				</nav>
				<main className="content">

					<div className="container-fluid p-0">
						<h1 className="h3 mb-3">Insert Product</h1>
						<div className="card">
							<div className="card-header text-bg-primary">
								<h3 className="mb-0 text-white">Product Form</h3>
							</div>
							<div className="card-body">
								<form id="productForm" onSubmit={this.insertProduct}>
									<div className="row">
										<div className="col-lg-6 mb-3">
											<label className="form-label">Category</label>
											<select
												onChange={(e) => this.updateValue(e)}
												value={this.state.category}
												className="form-select" name="category" id="category" required>
												<option value="">Select category</option>
												{this.state.categories.map((item) => {
													return <option value={item.id}>{item.title}</option>
												})}
											</select>
										</div>
										<div className="col-lg-6 mb-3">
											<label className="form-label">Name</label>
											<input type="text"
												onChange={(e) => this.updateValue(e)}
												value={this.state.name}
												className="form-control"
												name="name" />
										</div>
									</div>
									<div className="row">
										<div className="col-lg-4 mb-3"><label className="form-label">Photo</label><input type="file" onChange={(e) => this.setPhoto(e)}
											className="form-control" name="photo" />
										</div>

										<div className="col-lg-4 mb-3"><label className="form-label">Price</label>
											<input
												onChange={(e) => this.updateValue(e)}
												value={this.state.price}
												type="number" className="form-control" name="price" /></div>
										<div className="col-lg-4 mb-3"><label className="form-label">Stock</label><input
											onChange={(e) => this.updateValue(e)}
											value={this.state.stock}
											type="number" className="form-control" name="stock" /></div>
									</div>
									<div className="row">
										<div className="mb-3"><label className="form-label">Detail</label>
											<textarea
												onChange={(e) => this.updateValue(e)}
												value={this.state.detail}
												className="form-control" name="detail" rows="3"></textarea></div>
									</div>
									<div className="row">
										<div className="col-lg-4">
											<label className="form-label">Weight</label><input type="text"
												onChange={(e) => this.updateValue(e)}
												value={this.state.weight}
												className="form-control"
												name="weight" />
										</div>
										<div className="col-lg-4">
											<label className="form-label">Size</label><input type="text"
												onChange={(e) => this.updateValue(e)}
												value={this.state.size}
												className="form-control"
												name="size" />
										</div>
										<div className="col-lg-4">
											<label className="form-label">Is Live</label>
											<select className="form-select"
												name="islive"
												onChange={(e) => this.updateValue(e)}
												value={this.state.islive}>
												<option value="">Select</option>
												<option value="1">1 - Live</option>
												<option value="0">0 - Hidden</option>
											</select>
										</div>

									</div>
									<button type="submit" className="btn btn-primary">Save</button>
									<a href="product.html" className="btn btn-secondary">Cancel</a>
								</form>
								<div id="message" className="mt-3 small"></div>
							</div>
						</div>
					</div>

				</main>
			</div>
		</div>)
	}
}
