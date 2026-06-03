import React from "react";
import Menu from './menu';
import usingHooks from "./wrapper_functions";
import { getBaseImageURL, getBaseURL } from "./common";
import axios from "axios";
import { showError, showMessage } from "./message";

class EditProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			price: '',
			oldphoto: '',
			categoryid: '',
			stock: '',
			weight: '',
			size: '',
			islive: '',
			detail: '',           // Consistent naming
			categories: [],
			isLoading: false
		};
	}

	getProductDetail = () => {
		let productid = this.props.params['productid'];
		let apiAddress = getBaseURL() + "product.php?productid=" + productid;

		let options = {
			url: apiAddress,
			method: 'get',
			responseType: 'json'
		};

		axios(options).then((response) => {
			console.log("response received from api ", response.data);
			let error = response.data[0]['error'];

			if (error !== 'no') {
				showError(error);
			} else {
				if (response.data[1]['total'] === 0) {
					showError('no product found');
				} else {
					response.data.splice(0, 2);
					this.setState({
						id: response.data[0]['id'],
						name: response.data[0]['title'],
						price: response.data[0]['price'],
						stock: response.data[0]['stock'],
						weight: response.data[0]['weight'],
						size: response.data[0]['size'],
						oldphoto: response.data[0]['photo'],
						categoryid: response.data[0]['categoryid'],
						islive: response.data[0]['islive'],
						detail: response.data[0]['detail'],
					});
				}
			}
		}).catch((error) => {
			showError("Failed to load product. Please check your connection.");
		}).finally(() => {
			this.setState({ isLoading: false });
		});
	};

	getCategories = () => {
		let apiAddress = getBaseURL() + "category.php";
		let options = {
			url: apiAddress,
			method: 'get',
			responseType: 'json'
		};

		axios(options).then((response) => {
			console.log("response received from api ", response.data);
			let error = response.data[0]['error'];

			if (error !== 'no') {
				showError(error);
			} else {
				if (response.data[1]['total'] === 0) {
					showError('no category found');
				} else {
					response.data.splice(0, 2);
					this.setState({
						categories: response.data
					});
				}
			}
		}).catch((error) => {
			showError("Failed to load categories. Please check your connection.");
		});
	};

	componentDidMount() {
		this.getProductDetail();
		this.getCategories();
	}

	updateValue = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	updatePhoto = (e) => {
		this.setState({
			[e.target.name]: e.target.files[0]
		});
	};

	updateProduct = (e) => {
		e.preventDefault();
		console.log("Form submitted with data:", this.state);
		// Add your API call to update product here
		let form = new FormData()
		form.append("productid", this.state.id);
		form.append("name", this.state.name);
		form.append("photo", this.state.photo);
		form.append("islive", this.state.isLive);
		form.append("price", this.state.price);
		form.append("stock", this.state.stock);
		form.append("detail", this.state.detail);
		form.append("categoryid", this.state.categoryid);

		//api calling 
		let apiAddress = getBaseURL() + "update_product.php";
		console.log(apiAddress);
		let options = {
			url: apiAddress,
			method: 'post',
			responseType: 'json',
			data: form
		};
		axios(options).then((response) => {
			console.log(response.data);
			let error = response.data[0]['error'];
			if (error !== 'no') {
				showError(error);
			}
			else {
				let success = response.data[1]['success'];
				let message = response.data[2]['message'];
				if (success === 'no') {
					showError(message)
				}
				else {
					showMessage(message);
					setTimeout(() => {
						this.props.navigate("/products");
					}, 2000)
				}
			}
		}).catch((error) => {
			showError();
		});
		console.log('api called...');
		e.preventDefault();
	};

	render() {
		return (
			<div className="wrapper">
				<Menu />
				<div className="main">
					<nav className="navbar navbar-expand navbar-light navbar-bg">
						<a className="sidebar-toggle js-sidebar-toggle">
							<i className="hamburger align-self-center" />
						</a>
					</nav>
					<main className="content">
						<div className="container-fluid p-0">
							<h1 className="h3 mb-3">Update Product</h1>
							<div className="card">
								<div className="card-header text-bg-primary">
									<h3 className="mb-0 text-white">Edit Product</h3>
								</div>
								<div className="card-body">
									<form onSubmit={this.updateProduct}>
										<div className="row">
											{/* Existing Photo */}
											<div className="col-lg-3">
												<b>Existing Photo</b><br />
												<img
													src={getBaseImageURL() + "product/" + this.state.oldphoto}
													className="img-thumbnail img-fluid mt-2"
													alt="Product"
													style={{ maxHeight: "200px" }}
												/>
											</div>

											{/* Form Fields */}
											<div className="col-lg-9">
												<div className="row">
													<div className="col-lg-6 mb-3">
														<label className="form-label">Category</label>
														<select
															name="categoryid"
															value={this.state.categoryid}
															onChange={this.updateValue}
															className="form-select"
															required>
															<option value="">Select category</option>
															{this.state.categories.map((item) => (
																<option
																	key={item.id}
																	value={item.id}
																>
																	{item.title}
																</option>
															))}
														</select>
													</div>

													<div className="col-lg-6 mb-3">
														<label className="form-label">Name</label>
														<input
															type="text"
															value={this.state.name}
															onChange={this.updateValue}
															className="form-control"
															name="name"
														/>
													</div>
												</div>

												<div className="row">
													<div className="col-lg-4 mb-3">
														<label className="form-label">Photo</label>
														<input
															type="file"
															onChange={this.updatePhoto}
															className="form-control"
															name="photo"
														/>
													</div>
													<div className="col-lg-4 mb-3">
														<label className="form-label">Price</label>
														<input
															type="number"
															value={this.state.price}
															onChange={this.updateValue}
															className="form-control"
															name="price"
														/>
													</div>
													<div className="col-lg-4 mb-3">
														<label className="form-label">Stock</label>
														<input
															type="number"
															value={this.state.stock}
															onChange={this.updateValue}
															className="form-control"
															name="stock"
														/>
													</div>
												</div>

												<div className="row">
													<div className="col-12 mb-3">
														<label className="form-label">Detail</label>
														<textarea
															value={this.state.detail}
															onChange={this.updateValue}
															className="form-control"
															name="detail"
															rows="4">
														</textarea>
													</div>
												</div>

												<div className="row">
													<div className="col-lg-4 mb-3">
														<label className="form-label">Weight</label>
														<input
															type="text"
															value={this.state.weight}
															onChange={this.updateValue}
															className="form-control"
															name="weight"
														/>
													</div>
													<div className="col-lg-4 mb-3">
														<label className="form-label">Size</label>
														<input
															type="text"
															value={this.state.size}
															onChange={this.updateValue}
															className="form-control"
															name="size"
														/>
													</div>
													<div className="col-lg-4 mb-3">
														<label className="form-label">Is Live</label>
														<select
															className="form-select"
															name="islive"
															value={this.state.islive}
															onChange={this.updateValue}>
															<option value="1">1 - Live</option>
															<option value="0">0 - Hidden</option>
														</select>
													</div>
												</div>

												<div className="mt-3">
													<button type="submit" className="btn btn-primary me-2">
														Save Changes
													</button>
													<a href="product.html" className="btn btn-secondary">
														Cancel
													</a>
												</div>
											</div>
										</div>
									</form>

									<div id="message" className="mt-3 small"></div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		);
	}
}
export default usingHooks(EditProduct);