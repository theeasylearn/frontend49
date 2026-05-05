import React from "react";
import Menu from './menu';
import { Link } from "react-router-dom";

export default class ViewOrder extends React.Component {
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
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header text-bg-primary">
                                    <h3 className="h3 mb-3 text-white">Order Detail</h3>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <tr>
                                            <th width="25%">Order ID</th>
                                            <td width="25%">12345</td>
                                            <th width="25%">Customer Name</th>
                                            <td width="25%"></td>
                                        </tr>
                                        <tr>
                                            <th>Order Date</th>
                                            <td>2023-10-01</td>
                                            <th>Address</th>
                                            <td></td>

                                        </tr>
                                        <tr>
                                            <th>Amount</th>
                                            <td>$199.99</td>
                                            <th>City</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>Order Status</th>
                                            <td>
                                                <form action="">
                                                    <table>
                                                        <tr>
                                                            <td><select name="order_status" id="order_status"
                                                                    className="form-select form-select-sm">
                                                                    <option value="pending">Pending</option>
                                                                    <option value="processing">Processing</option>
                                                                    <option value="shipped">Shipped</option>
                                                                    <option value="delivered">Delivered</option>
                                                                    <option value="cancelled">Cancelled</option>
                                                                </select>
                                                            </td>
                                                            <td><button type="submit"
                                                                    className="btn btn-sm btn-primary ms-2">Update</button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </form>
                                            </td>
                                            <th>Pincode</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>Payment status</th>
                                            <td></td>
                                            <th>Remarks</th>
                                            <td></td>
                                        </tr>

                                    </table>
                                    <table className="table table-bordered table-sm table-striped">
                                        <thead>
                                            <tr>
                                                <th width="10%">Product ID</th>
                                                <th>Product Name</th>
                                                <th width="20%">Product Image</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>IPhone 17 pro max</td>
                                                <td></td>
                                                <td className="text-end">125000</td>
                                                <td className="text-end">1</td>
                                                <td className="text-end">1,25,000</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <th colSpan="5" className="text-right">Total:</th>
                                            <td className="text-end">1,25,000</td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                    <p className="text-end">
                                        <Link to="/print-orders" className="btn btn-sm btn-primary">Print Invoice</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                </main>
            </div>
        </div>)
    }
}
