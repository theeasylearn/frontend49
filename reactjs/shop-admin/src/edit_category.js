import React from "react";
import Menu from './menu';

export default class EditCategory extends React.Component {
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
					<div className="card">
						<div className="card-header text-bg-primary">
							<h3 className="mb-0 text-white">Edit Category</h3>
						</div>
						<div className="card-body">
							<form id="categoryForm">
								<div className="row">
									<div className="col-lg-3">
										<b>Existing Photo</b>
										<img src="http://picsum.photos/300" className="img-thumbnail img-fluid" />
									</div>
									<div className="col-lg-9">
										<div className="mb-3">
											<label className="form-label">ID</label><input type="text" className="form-control"
												name="id" value="" readOnly />
										</div>
										<div className="mb-3"><label className="form-label">Title</label><input type="text"
												className="form-control" name="title" value="" /></div>
										<div className="mb-3"><label className="form-label">Photo</label><input type="file"
												className="form-control" name="photo" /></div>
										<div className="mb-3"><label className="form-label">Is Live</label><select
												className="form-select" name="islive">
												<option value="1">1 - Live</option>
												<option value="0">0 - Hidden</option>
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
