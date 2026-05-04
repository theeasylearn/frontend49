import React from "react";
import Menu from './menu';

export default class ViewProduct extends React.Component {
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
                        <div className="card-header text-bg-primary">
                            <h3 className="mb-0 text-white">All Products</h3>
                        </div>
                        <div className="card-body">
                            {/* product detail */}
                            <div className="row g-0">

                                {/* Product Photo */}
                                <div className="col-lg-5 border-end border-3 border-dark p-4 d-flex align-items-center justify-content-center bg-light"
                                    style={{minHeight: "500px"}}>
                                    <div
                                        className="border border-3 border-dark w-100 h-100 d-flex align-items-center justify-content-center text-center p-5">
                                        <img src="http://picsum.photos/300" className="img-thumbnail img-fluid" />
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="col-lg-7">

                                    <table className="table table-bordered border-3 border-dark m-0">
                                        <tr>
                                            <td className="fw-bold bg-light" style={{width: "180px"}}>ID</td>
                                            <td>PROD-001234</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold bg-light">Name</td>
                                            <td>Wireless Headphones Pro</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold bg-light">Price</td>
                                            <td className="fw-bold text-success">$89.99</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold bg-light">Stock</td>
                                            <td>247 in stock</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold bg-light">Weight</td>
                                            <td>285 g</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold bg-light">Size</td>
                                            <td>Medium</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold bg-light">Category</td>
                                            <td>Electronics → Audio</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold bg-light">Detail</td>
                                            <td>Premium noise-cancelling wireless headphones with 40-hour battery life.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold bg-light">Islive</td>
                                            <td>
                                                <span className="badge bg-success fs-5 px-4 py-2">✅ Active</span>
                                            </td>
                                        </tr>
                                    </table>

                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <button className="btn btn-primary btn-lg px-5 me-3">
                                    <i className="bi bi-pencil-square"></i> Edit Product
                                </button>
                                <button className="btn btn-outline-danger btn-lg px-5">
                                    <i className="bi bi-trash"></i> Delete
                                </button>
                            </div>
                            {/* product detail */}
                        </div>
                    </div>
                </div>
            
                </main>
            </div>
        </div>)
    }
}
