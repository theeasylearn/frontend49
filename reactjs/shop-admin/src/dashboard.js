// create class component 
import React from "react";
import Menu from "./menu";
import usingHooks from "./wrapper_functions";
import { getBaseURL } from "./common";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError } from "./message";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.setState({
            summery:[]  
        });
    }
    componentDidMount() {
        let apiAddress = getBaseURL() + "summery.php";
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
                response.data.splice(0, 1);
                //copy data into state array
                this.setState({
                    summery: response.data
                });

            }
        }).catch((error) => {
            //code in this block will execute only if data could not be fetched from server. it is error there could be mostly 2 reasons for it.
            // 1) you are offline 
            // 2) server is offline or api address is wrong
            showError();

        });
    }
    render() {
        return (<div className="wrapper">
            <ToastContainer />
            <Menu />
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">
                    <a className="sidebar-toggle js-sidebar-toggle">
                        <i className="hamburger align-self-center" />
                    </a>
                </nav>
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3">Dashboard</h1>
                        <div className="row">
                            <div className="col-sm-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title">Daily Sales</h5>
                                            </div>
                                        </div>
                                        <h1 className="mt-1 mb-3">{this.state!= null && this.state.summery[0]['daily']}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title">Weekly Sales</h5>
                                            </div>
                                        </div>
                                        <h1 className="mt-1 mb-3">{this.state!= null && this.state.summery[0]['weekly']}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title">Monthly Sales</h5>
                                            </div>
                                        </div>
                                        <h1 className="mt-1 mb-3">{this.state!= null && this.state.summery[0]['monthly']}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title">Yearly Sales</h5>
                                            </div>
                                        </div>
                                        <h1 className="mt-1 mb-3">{this.state!= null && this.state.summery[0]['yearly']}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-xl-4">
                                <div className="card text-bg-secondary">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title text-white">Category</h5>
                                            </div>
                                        </div>
                                        <h1 className="mt-1 mb-3">{this.state!= null && this.state.summery[0]['categories']}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-4">
                                <div className="card text-bg-info">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title text-white">Product</h5>
                                            </div>
                                        </div>
                                        <h1 className="mt-1 mb-3">{this.state!= null && this.state.summery[0]['products']}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-4">
                                <div className="card text-bg-warning">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mt-0">
                                                <h5 className="card-title text-white">Orders</h5>
                                            </div>
                                        </div>
                                        <h1 className="mt-1 mb-3">{this.state!= null && this.state.summery[0]['orders']}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        );
    }
}