import React from "react";
import Menu from './menu';
import { Link } from "react-router-dom";
import { getBaseURL, getBaseImageURL } from "./common";
import axios from 'axios';
import { showError, showMessage } from "./message";
import { ToastContainer } from "react-toastify";

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: true,      // For initial loading
            deletingId: null      // For delete operation
        };
    }

    componentDidMount() {
        console.log("componentDidMount method is called.");
        
        let apiAddress = getBaseURL() + "product.php";
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
                        products: response.data
                    });
                }
            }
        }).catch((error) => {
            showError("Failed to load products. Please check your connection.");
        }).finally(() => {
            this.setState({ isLoading: false });   // Stop loading in both success & error
        });
    }

    deleteProduct = (productID) => {
        if (this.state.deletingId) return; // Prevent multiple clicks
        
        this.setState({ deletingId: productID });

        var apiAddress = getBaseURL() + "delete_product.php?id=" + productID;
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
                
                let filteredProduct = this.state.products.filter((item) => item.id !== productID);
                
                this.setState({
                    products: filteredProduct
                });
                
                showMessage(message);
            }
        }).catch((error) => {
            showError("Failed to delete product");
        }).finally(() => {
            this.setState({ deletingId: null });
        });
    }

    render() {
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
                                <h1 className="h3 mb-0">Product List</h1>
                                <Link className="btn btn-primary" to="/insert-product">Add Product</Link>
                            </div>

                            <div className="card">
                                <div className="card-header text-bg-primary">
                                    <h3 className="mb-0 text-white">All Products</h3>
                                </div>
                                <div className="card-body">
                                    
                                    {/* Loading Message */}
                                    {this.state.isLoading===true ? (
                                        <div className="text-center py-5">
                                            <div className="spinner-border text-primary mb-3" role="status"></div>
                                            <h5>Products are loading...</h5>
                                        </div>
                                    ) : (
                                        <table className="table table-bordered table-striped mb-0">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Photo</th>
                                                    <th>Category</th>
                                                    <th>Price</th>
                                                    <th>Stock</th>
                                                    <th>Is Live</th>
                                                    <th width="20%">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.products.map((item) => {
                                                    const isDeleting = this.state.deletingId === item.id;
                                                    
                                                    return (
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.title}</td>
                                                            <td>
                                                                <img 
                                                                    src={getBaseImageURL() + "product/" + item.photo} 
                                                                    className="img-fluid" 
                                                                    style={{ maxHeight: "60px" }}
                                                                    alt={item.title}
                                                                />
                                                            </td>
                                                            <td>{item.categorytitle}</td>
                                                            <td>{item.price}</td>
                                                            <td>{item.stock}</td>
                                                            <td>
                                                                {(item.islive === '1') ? 
                                                                    <span className="badge bg-success">Yes</span> : 
                                                                    <span className="badge bg-danger">No</span>
                                                                }
                                                            </td>
                                                            <td>
                                                                <Link 
                                                                    className="btn btn-sm btn-warning me-2" 
                                                                    to={`/edit-product/${item.id}`}
                                                                >
                                                                    Edit
                                                                </Link>
                                                                <button 
                                                                    onClick={() => this.deleteProduct(item.id)} 
                                                                    type='button' 
                                                                    className="btn btn-sm btn-danger me-2"
                                                                    disabled={isDeleting}
                                                                >
                                                                    {isDeleting ? "Deleting..." : "Delete"}
                                                                </button>
                                                                <Link 
                                                                    to={"/view-product/" + item.id} 
                                                                    className="btn btn-sm btn-primary"
                                                                >
                                                                    View
                                                                </Link>
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