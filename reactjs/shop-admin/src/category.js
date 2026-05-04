import React from "react";
import Menu from './menu';
export default class Category extends React.Component {
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
                            <h1 className="h3 mb-0">Category List</h1>
                            <a className="btn btn-primary" href="insert-category.html">Add Category</a>
                        </div>
                        <div className="card">
                            <div className="card-header text-bg-primary">
                                <h3 className="mb-0 text-white">All Categories</h3>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped mb-0">
                                    <thead>
                                        <tr><th width="5%">ID</th><th>Title</th><th>Photo</th><th>Is Live</th><th width="15%">Actions</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td><td>Soap</td><td>soap.jpg</td><td><span className="badge bg-success">Yes</span></td>
                                            <td>
                                                <a className="btn btn-sm btn-warning" href="edit-category.html?id=1">Edit</a>
                                                <a className="btn btn-sm btn-danger" href="delete-category.html?id=1">Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        )
    }
}