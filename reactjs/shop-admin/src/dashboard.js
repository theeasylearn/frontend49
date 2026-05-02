// create class component 
import React from "react";
import Menu from "./menu";
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="wrapper">
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
                                        <h1 className="mt-1 mb-3">47,500</h1>
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
                                        <h1 className="mt-1 mb-3">147,500</h1>
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
                                        <h1 className="mt-1 mb-3">247,500</h1>
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
                                        <h1 className="mt-1 mb-3">47,50000</h1>
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
                                        <h1 className="mt-1 mb-3">10</h1>
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
                                        <h1 className="mt-1 mb-3">5</h1>
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
                                        <h1 className="mt-1 mb-3">500</h1>
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