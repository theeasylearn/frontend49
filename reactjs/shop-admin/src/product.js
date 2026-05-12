import React from "react";
import Menu from './menu';
import { Link } from "react-router-dom";
import { getBaseURL, getBaseImageURL } from "./common";
import axios from 'axios';
import { showError } from "./message";
import { ToastContainer } from "react-toastify";

export default class Product extends React.Component {
	constructor(props) {
		super(props);
		//create state array
		this.state = {
			products: []
		};
	}
	componentDidMount() {
		console.log("componentDidMount method is called.");
		//api call 
		let apiAddress = getBaseURL() + "product.php";
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
					showError('no product found');
				}
				else {
					//1st delete 2 object from beginning 
					response.data.splice(0, 2);
					//copy data into state array
					this.setState({
						products: response.data
					}, () => {
						console.log('data stored into state array product');
						console.log(this.state.products);
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
						<div className="d-flex justify-content-between align-items-center mb-3">
							<h1 className="h3 mb-0">Product List</h1>
							<Link className="btn btn-primary" to="/insert-product">Add Product</Link>
						</div>
						<div className="card">
							<div className="card-header text-bg-primary"><h3 className="mb-0 text-white">All Products</h3></div>
							<div className="card-body">
								<table className="table table-bordered table-striped mb-0">
									<thead>
										<tr><th>ID</th><th>Name</th><th>Photo</th><th>Category</th><th>Price</th><th>Stock</th><th>Is Live</th><th width="20%">Actions</th></tr>
									</thead>
									<tbody>
										{this.state.products.map((item) => {
											return (
												<tr>
													<td>{item.id}</td><td>{item.title}</td>
													<td><img src={getBaseImageURL() + "product/"+ item.photo} className="img-fluid" /></td>
													<td>
														{item.categorytitle}</td><td>{item.price}</td><td>{item.stock}</td><td>
														{(item.islive === '1' ? <span className="badge bg-success">Yes</span>:<span className="badge bg-danger">No</span>)}
													</td>
													<td>
														<Link className="btn btn-sm btn-warning" to="/edit-product">Edit</Link>
														<a className="btn btn-sm btn-danger" href="delete-product.html?productid=1">Delete</a>
			<Link to={"/view-product/" + item.id} className="btn btn-sm btn-primary">View </Link>
													</td>
												</tr>)
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>

				</main>
			</div>
		</div>)
	}
}
