import React from "react";
import Menu from './menu';

export default class Users extends React.Component {
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
					<h1 className="h3 mb-3">Users</h1>
					<div className="card">
						<div className="card-header text-bg-primary">
							<h3 className="mb-0 text-white">All Users</h3>
						</div>
						<div className="card-body">
							<table className="table table-bordered table-striped mb-0">
								<thead>
									<tr>
										<th>ID</th>
										<th>Email</th>
										<th>Mobile</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>ankit@gmail.com</td>
										<td>1234567890</td>
										<td>Live</td>
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
