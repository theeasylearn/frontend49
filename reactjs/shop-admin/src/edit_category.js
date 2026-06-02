import React from "react";
import Menu from './menu';
import usingHooks from "./wrapper_functions";
import { getBaseURL, getBaseImageURL } from "./common";
import axios from 'axios';
import { showError, showMessage } from "./message";
import { ToastContainer } from "react-toastify";

class EditCategory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			title: '',
			oldPhoto: '',
			isLive: ''
		}
	}

	componentDidMount() {
		console.log("componentDidMount method is called.");
		let categoryid = this.props.params['categoryid'];
		//alert(categoryid);
		let apiAddress = getBaseURL() + "category.php?id=" + categoryid;
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
						id: response.data[0]['id'],
						title: response.data[0]['title'],
						oldPhoto: response.data[0]['photo'],
						isLive: response.data[0]['islive']
					});
				}
			}
		}).catch((error) => {
			showError("Failed to load categories. Please check your connection.");
		}).finally(() => {
			this.setState({ isLoading: false });   // Stop loading in both success & error
		});
	}

	updateValue = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	updatePhoto = (e) => {
		this.setState({
			[e.target.name]: e.target.files[0]
		});
	}

	updateCategory = (e) => {

		console.log(this.state);

		let form = new FormData()
		form.append("id", this.state.id);
		form.append("title", this.state.title);
		form.append("photo", this.state.photo);
		form.append("islive", this.state.isLive);

		//api calling 
		let apiAddress = getBaseURL() + "update_category.php";
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
						this.props.navigate("/categories");
					},2000)
				}
			}
		}).catch((error) => {
			showError();
		});
		console.log('api called...');
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
						<div className="card">
							<div className="card-header text-bg-primary">
								<h3 className="mb-0 text-white">Edit Category</h3>
							</div>
							<div className="card-body">
								<form id="categoryForm" onSubmit={this.updateCategory}>
									<div className="row">
										<div className="col-lg-3">
											<b>Existing Photo</b>
											<img src={getBaseImageURL() + "category/" + this.state.oldPhoto}
												className="img-thumbnail img-fluid" />
										</div>
										<div className="col-lg-9">
											<div className="mb-3">
												<label className="form-label">ID</label>

												<input type="text" className="form-control"
													value={this.state.id}
													name="id" readOnly />
											</div>
											<div className="mb-3"><label className="form-label">Title</label><input type="text"
												className="form-control" name="title" value={this.state.title}
												onChange={(e) => this.updateValue(e)}
											/></div>
											<div className="mb-3"><label className="form-label">Photo</label>
												<input type="file"
													onChange={(e) => this.updatePhoto(e)}
													className="form-control" name="photo" /></div>
											<div className="mb-3"><label className="form-label">Is Live</label>
												<select
													onChange={(e) => this.updateValue(e)}
													className="form-select" name="islive">
													<option value="1"
														selected={(this.state.isLive === '1') ? 'selected' : ''}>1 - Live</option>
													<option value="0" selected={(this.state.isLive === '0') ? 'selected' : ''} >0 - Hidden</option>
												</select></div>
											<button type="submit" className="btn btn-primary">Update</button>
											<a href="category.html" className="btn btn-secondary">Cancel</a>
										</div>
									</div>
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

//required because then only we access hook inside class components 
export default usingHooks(EditCategory)