import React from "react";
import Menu from './menu';

export default class Product extends React.Component {
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
					<div className="d-flex justify-content-between align-items-center mb-3">
						<h1 className="h3 mb-0">Product List</h1>
						<a className="btn btn-primary" href="insert-product.html">Add Product</a>
					</div>
					<div className="card">
						<div className="card-header text-bg-primary"><h3 className="mb-0 text-white">All Products</h3></div>
						<div className="card-body">
							<table className="table table-bordered table-striped mb-0">
								<thead>
									<tr><th>ID</th><th>Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Is Live</th><th width="20%">Actions</th></tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td><td>Handwash</td><td>Soap</td><td>120</td><td>20</td><td><span className="badge bg-success">1</span></td>
										<td>
											<a className="btn btn-sm btn-warning" href="edit-product.html?productid=1">Edit</a>
											<a className="btn btn-sm btn-danger" href="delete-product.html?productid=1">Delete</a>
											<a href="view-product.html" className="btn btn-sm btn-primary">View </a>
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
