import React from "react";
import Menu from './menu';
import { Link } from "react-router-dom";
import usingHooks from "./wrapper_functions";
import { getBaseImageURL, getBaseURL } from "./common";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./message";


class ViewOrder extends React.Component {
    constructor(props) {
        super(props);
        //create state array
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        const { orderid } = this.props.params;
        console.log("Order id " + orderid);
        let apiAddress = getBaseURL() + "orders.php?id=" + orderid;
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
                    showError('no orders found');
                }
                else {
                    //1st delete 2 object from beginning 
                    response.data.splice(0, 2);
                    //copy data into state array
                    this.setState({
                        orders: response.data
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
            <Menu />
            <ToastContainer />
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
                                        { /* order data */
                                            this.state.orders.map((item) => {
                                                return (<table className="table table-bordered">
                                                    <tr>
                                                        <th width="25%">Order ID</th>
                                                        <td width="25%">{item.id}</td>
                                                        <th width="25%">Customer Name</th>
                                                        <td width="25%">{item.fullname}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Order Date</th>
                                                        <td>{item.billdate}</td>
                                                        <th>Address</th>
                                                        <td>{item.address1} {item.address2}</td>

                                                    </tr>
                                                    <tr>
                                                        <th>Amount</th>
                                                        <td>{item.amount}</td>
                                                        <th>City</th>
                                                        <td>{item.city}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Order Status</th>
                                                        <td>
                                                            <form action="">
                                                                <table>
                                                                    <tr>
                                                                        <td>
    <select name="order_status" id="order_status"
    className="form-select form-select-sm">
    <option value="1" selected={(item.orderstatus === '1')}>Pending</option>
    <option value="2" selected={(item.orderstatus === '2')}>Processing</option>
    <option value="3" selected={(item.orderstatus === '3')}>Shipped</option>
    <option value="4" selected={(item.orderstatus === '4')}>Delivered</option>
    <option value="5" selected={(item.orderstatus === '5')}>Cancelled</option>
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
                                                        <td>{item.pincode}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Payment Mode</th>
                                                        <td>
{(item.paymentmode === '0'?"Cash on Delivery":"Online")}
</td>
                                                        <th>Remarks</th>
                                                        <td>{item.remarks}</td>
                                                    </tr>

                                                </table>)
                                            })
                                        }

                                        {/* order item data */}
                                        <table className="table table-bordered table-sm table-striped">
                                            <thead>
                                                <tr>
                                                    <th width="10%">Product ID</th>
                                                    <th>Product Name</th>
                                                   
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>IPhone 17 pro max</td>
                                                    
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
// below line is compulsory to use hook in class component 
export default usingHooks(ViewOrder);