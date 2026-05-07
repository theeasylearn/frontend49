import React from "react";
import Menu from './menu';
import { Link } from "react-router-dom";
import { getBaseURL } from "./common";
import axios from 'axios';
import { showError } from "./message";
import { ToastContainer } from "react-toastify";

export default class Category extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor called');
        //create state array
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        //use componentDidMount to call api to fetch data from server 
        // componentDidMount method is callback method, run only once just after render() method execute 1st time 
        console.log("componentDidMount method is called.");
        //api call 
        let apiAddress = getBaseURL() + "category.php";
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
                    showError('no category found');
                }
                else {
                    //1st delete 2 object from beginning 
                    response.data.splice(0, 2);
                    //copy data into state array
                    this.setState({
                        categories: response.data
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
    render() {
        console.log("render method is called");
        return (<div className="wrapper">
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
                                <table className="table table-bordered table-striped mb-0">
                                    <thead>
                                        <tr><th width="5%">ID</th><th>Title</th><th>Photo</th><th>Is Live</th><th width="15%">Actions</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td><td>Soap</td><td>soap.jpg</td><td><span className="badge bg-success">Yes</span></td>
                                            <td>
                                                <Link className="btn btn-sm btn-warning" to="/edit-category">Edit</Link>
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