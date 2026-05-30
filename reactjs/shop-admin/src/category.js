import React from "react";
import Menu from './menu';
import { Link } from "react-router-dom";
import { getBaseURL, getBaseImageURL } from "./common";
import axios from 'axios';
import { showError, showMessage } from "./message";
import { ToastContainer } from "react-toastify";

export default class Category extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor called');
        
        this.state = {
            categories: [],
            isLoading: true,        // For initial loading
            deletingId: null        // For delete operation
        }
    }

    componentDidMount() {
        console.log("componentDidMount method is called.");
        
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
        }).finally(() => {
            this.setState({ isLoading: false });   // Stop loading in both success & error
        });
    }

    deleteCategory = (categoryID) => {
        if (this.state.deletingId) return; // Prevent multiple clicks

        this.setState({ deletingId: categoryID });

        var apiAddress = getBaseURL() + "delete_category.php?id=" + categoryID;
        var options = {
            method: 'get',
            responseType: 'json',
            url: apiAddress,
        };

        axios(options).then((response) => {
            let error = response.data[0]['error'];
            
            if (error !== 'no') {
                showError(error);
            } else {
                var message = response.data[1]['message'];
                
                // Remove from state
                let filteredCategory = this.state.categories.filter((item) => item.id !== categoryID);
                
                this.setState({
                    categories: filteredCategory
                });
                
                showMessage(message);
            }
        }).catch((error) => {
            showError("Failed to delete category");
        }).finally(() => {
            this.setState({ deletingId: null });   // Reset deleting state
        });
    }

    render() {
        console.log("render method is called");

        return (
            <div className="wrapper">
                <ToastContainer />
                <Menu />
                <div className="main">
                    <nav className="navbar navbar-expand navbar-light navbar-bg">
                        <a className="sidebar-toggle js-sidebar-toggle"><i className="hamburger align-self-center" /></a>
                    </nav>
                    
                    <main className="content">
                        <div className="container-fluid p-0">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h1 className="h3 mb-0">Category List</h1>
                                <Link className="btn btn-primary" to="/insert-category">Add Category</Link>
                            </div>

                            <div className="card">
                                <div className="card-header text-bg-primary">
                                    <h3 className="mb-0 text-white">All Categories</h3>
                                </div>
                                <div className="card-body">
                                    
                                    {/* Loading Message */}
                                    {this.state.isLoading ? (
                                        <div className="text-center py-5">
                                            <div className="spinner-border text-primary mb-3" role="status"></div>
                                            <h5>Category is loading...</h5>
                                        </div>
                                    ) : (
                                        <table className="table table-bordered table-striped mb-0">
                                            <thead>
                                                <tr>
                                                    <th width="5%">ID</th>
                                                    <th>Title</th>
                                                    <th>Photo</th>
                                                    <th>Is Live</th>
                                                    <th width="15%">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.categories.map((item) => {
                                                    const isDeleting = this.state.deletingId === item.id;
                                                    
                                                    return (
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.title}</td>
                                                            <td>
                                                                <img 
                                                                    src={getBaseImageURL() + "category/" + item.photo} 
                                                                    className="img-fluid" 
                                                                    style={{ maxHeight: "60px" }} 
                                                                    alt={item.title}
                                                                />
                                                            </td>
                                                            <td>
                                                                {(item.islive === '1') ? 
                                                                    <span className="badge bg-success">Yes</span> : 
                                                                    <span className="badge bg-danger">No</span>
                                                                }
                                                            </td>
                                                            <td>
                                                                <Link 
                                                                    className="btn btn-sm btn-warning me-2" 
                                                                    to={`/edit-category/${item.id}`}
                                                                >
                                                                    Edit
                                                                </Link>
                                                                <button 
                                                                    type="button" 
                                                                    onClick={() => this.deleteCategory(item.id)}
                                                                    className="btn btn-sm btn-danger"
                                                                    disabled={isDeleting}
                                                                >
                                                                    {isDeleting ? "Deleting..." : "Delete"}
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}