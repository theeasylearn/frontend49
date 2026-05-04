import React from "react";
import Menu from './menu';

export default class EditProduct extends React.Component {
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
					<h1 className="h3 mb-3">Update Product</h1>
					<div className="card">
						<div className="card-header text-bg-primary">
							<h3 className="mb-0 text-white">Edit Product</h3>
						</div>
						<div className="card-body">
							<div className="row">
								<div className="col-lg-3">
									<b>Existing Photo</b>
									<img src="http://picsum.photos/300" className="img-thumbnail img-fluid" />
								</div>
								<div className="col-lg-9">
									<form id="productForm">
										<div className="row">
											<div className="col-lg-6 mb-3">
												<label className="form-label">Category ID</label><input type="number"
													className="form-control" name="categoryid" />
											</div>
											<div className="col-lg-6 mb-3">
												<label className="form-label">Name</label><input type="text"
													className="form-control" name="name" />
											</div>
										</div>
										<div className="row">
											<div className="col-lg-4 mb-3"><label className="form-label">Photo</label><input
													type="file" className="form-control" name="photo" /></div>

											<div className="col-lg-4 mb-3"><label className="form-label">Price</label><input
													type="number" className="form-control" name="price" /></div>
											<div className="col-lg-4 mb-3"><label className="form-label">Stock</label><input
													type="number" className="form-control" name="stock" /></div>
										</div>
										<div className="row">
											<div className="mb-3"><label className="form-label">Detail</label><textarea
													className="form-control" name="detail" rows="3"></textarea></div>
										</div>
										<div className="row">
											<div className="col-lg-4">
												<label className="form-label">Weight</label><input type="text"
													className="form-control" name="weight" />
											</div>
											<div className="col-lg-4">
												<label className="form-label">Size</label><input type="text"
													className="form-control" name="price" />
											</div>
											<div className="col-lg-4">
												<label className="form-label">Is Live</label><select className="form-select"
													name="islive">
													<option value="1">1 - Live</option>
													<option value="0">0 - Hidden</option>
												</select>
											</div>

										</div>
										<button type="submit" className="btn btn-primary">Save</button>
										<a href="product.html" className="btn btn-secondary">Cancel</a>
									</form>
								</div>
							</div>
							<div id="message" className="mt-3 small"></div>
						</div>
					</div>
				</div>
			
                </main>
            </div>
        </div>)
    }
}
