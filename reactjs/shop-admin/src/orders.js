import React from "react";
import Menu from './menu';

export default class Orders extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="wrapper">
            <Menu />
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
									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td>
											<a href="view-order.html" className="btn btn-sm btn-primary">View Order</a>
										</td>
									</tr>
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
