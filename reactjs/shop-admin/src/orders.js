import React from "react";
import Menu from './menu';
import { Link } from "react-router-dom";
import { getBaseImageURL, getBaseURL } from "./common";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./message";
export default class Orders extends React.Component {
	constructor(props) {
		super(props);
		this.status = ['Pending','Processing','Shipped','Delivered','Cancelled']
		//create state array
		this.state = {
			orders: []
		}
	}
	componentDidMount() {
		console.log("callback function, will be called only once after render method execute 1st times");
		//used to called to api to fetch data 
		//api call 
		let apiAddress = getBaseURL() + "orders.php";
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
					showError('no orders found');
				}
				else {
					//1st delete 2 object from beginning 
					response.data.splice(0, 2);
					//copy data into state array
					this.setState({
						orders: response.data
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
	Display(item) {
		//{"billdate":"24-04-2026","orderstatus":"1","id":"45","fullname":"dharm","address1":"anand","address2":"1","city":"anand","pincode":"364715","amount":"125100"}
		// object destrcturing 
		let { billdate, orderstatus, id, fullname, address1, address2, city, pincode, amount } = item;
		return (<tr>
			<td>{id}</td>
			<td>{billdate}</td>
			<td>{fullname}</td>
			<td>{amount}</td>
			<td>{city}</td>
			<td>{this.status[orderstatus]}</td>
			<td>
				<Link to={"/view-orders/" + id} className="btn btn-sm btn-primary">View Order</Link>
			</td>
		</tr>);
	}
	render() {
		return (<div className="wrapper">
			<Menu />
			<ToastContainer />
			<div className="main">
				<nav className="navbar navbar-expand navbar-light navbar-bg">
					<a className="sidebar-toggle js-sidebar-toggle"><i className="hamburger align-self-center" /></a>
				</nav>
				<main className="content">

					<div className="container-fluid p-0">
						<h1 className="h3 mb-3">Orders</h1>
						<div className="card">
							<div className="card-header text-bg-primary"><h3 className="mb-0 text-white">All Orders</h3></div>
							<div className="card-body">
								<table className="table table-bordered table-striped mb-0">
									<thead><tr><th width="75">ID</th><th width="150">Order Date</th><th>Full Name</th><th>Amount</th><th>City</th><th width="150">Order Status</th><th width="150">Action</th></tr></thead>
									<tbody>
										{this.state.orders.map((item) => this.Display(item))}
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
