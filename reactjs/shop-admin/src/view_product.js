import React from "react";
import Menu from './menu';
import usingHooks from './wrapper_functions';
import { showError } from "./message";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { getBaseURL, getBaseImageURL } from "./common";
//http://localhost:3000/view-product/5
class ViewProduct extends React.Component {
    constructor(props) {
        super(props);
        //create state array
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        const { id } = this.props.params;
        console.log("Fetching product ID:", id);
        const apiAddress = getBaseURL() + "product.php?productid=" + id;
        console.log(apiAddress);
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
                    showError('no product found');
                }
                else {
                    //1st delete 2 object from beginning 
                    response.data.splice(0, 2);
                    //copy data into state array
                    this.setState({
                        products: response.data
                    }, () => {
                        console.log('data stored into state array product');
                        console.log(this.state.products);
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
                                        style={{ minHeight: "500px" }}>
                                        <div
                                            className="border border-3 border-dark w-100 h-100 d-flex align-items-center justify-content-center text-center p-5">
                                            <img src="http://picsum.photos/300" className="img-thumbnail img-fluid" />
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="col-lg-7">

                                        { this.state.products.length > 0 && this.state.products.map((item) => {
                                            return (<table className="table table-bordered border-3 border-dark m-0">
                                                <tr>
                                                    <td className="fw-bold bg-light" style={{ width: "180px" }}>ID</td>
                                                    <td>{item.id}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold bg-light">Name</td>
                                                    <td>{item.title}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold bg-light">Price</td>
                                                    <td className="fw-bold text-success">
                                                        {item.price}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold bg-light">Stock</td>
                                                    <td>
                                                        {item.stock}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold bg-light">Weight</td>
                                                    <td>{item.weight}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold bg-light">Size</td>
                                                    <td>{item.size}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold bg-light">Category</td>
                                                    <td>{item.categorytitle}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold bg-light">Detail</td>
                                                    <td>
                                                        {item.detail}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold bg-light">Islive</td>
                                                    <td>
                                                        {item.islive === '1' ? <span className="badge bg-success fs-5 px-4 py-2">✅ Active</span> : <span className="badge bg-danger fs-5 px-4 py-2">✅ Not Active</span>}
                                                    </td>
                                                </tr>
                                            </table>);
                                        })

                                        }

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
export default usingHooks(ViewProduct);