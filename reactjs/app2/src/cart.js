import { useEffect, useState } from "react";
import { getBaseURL, getBaseImageURL } from "./common";
import { showError, showMessage } from "./message";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
export default function Cart() {
    let [cookies] = useCookies(['id']);
    //create state array for storing data which is coming from api
    let [data, setData] = useState([]);
    let [isDataFetched, setIsDataFetched] = useState(false);
    let [totalPayable, setTotalPayable] = useState(0);
    useEffect(() => {
        //api calling 
        if (isDataFetched === false) {
            let apiAddress = getBaseURL() + "cart.php?usersid=" + cookies['id'];
            let options = {
                url: apiAddress,
                method: 'get',
                responseType: 'json'
            };
            axios(options).then((response) => {
                console.log(response.data);
                let error = response.data[0]['error'];
                if (error !== 'no') {
                    showError(error);
                }
                else {
                    let total = response.data[1]['total'];
                    if (total === 0) {
                        showError("No product found in cart");
                    }
                    else {
                        //remove first 2 object from array because these are not product data
                        response.data.splice(0, 2);
                        setData(response.data);
                        //create local variable for storing total payable amount
                        let totalPayable = 0;
                        //calculate total payable amount
                        response.data.forEach((item) => {
                            totalPayable += (item.price * item.quantity);
                        });
                        setTotalPayable(totalPayable);
                        setIsDataFetched(true);
                    }
                }
            }).catch((error) => {
                showError();
            });
        }
    });
    let deleteFromCart = function (cartid) {
        let apiAddress = getBaseURL() + "delete_from_cart.php?cartid=" + cartid;
        console.log(apiAddress);
        let options = {
            url: apiAddress,
            method: 'get',
        };
        axios(options).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let message = response.data[1]['message'];
                showMessage(message);
                //remove deleted item from data array
                let newData = data.filter((item) => {
                    if (item.cartid !== cartid) {
                        return item;
                    }
                });

                setData(newData);
                //create local variable for storing total payable amount    
                let totalPayable = 0;
                //calculate total payable amount    
                newData.forEach((item) => {
                    totalPayable += (item.price * item.quantity);
                });
                setTotalPayable(totalPayable);
            }
        }).catch((error) => {
            showError();
        });
    };
    let displayCartItem = function (item) {
        return (<tr>
            <td width="20%">
                <div className="product-cart d-flex">

                    <div className="product-content media-body">
                        <h5 className="title">
                            <a href="product-details-page.html">{item.title}</a>
                        </h5>
                        <img src={getBaseImageURL() + "product/" + item.photo} alt={item.title} />
                    </div>
                </div>
            </td>
            <td width="20%">
                {item.quantity}
            </td>
            <td width="20%">
                <p className="price">{item.price}</p>
            </td>
            <td>
                {item.quantity * item.price}
            </td>
            <td width="40%" align="right">
                <ul className="action">
                    <li>
                        <a className="favorite" href="javascript:void(0)"><i className="mdi mdi-heart-outline" /></a>
                    </li>
                    <li>
                        <button onClick={(e) => deleteFromCart(item.cartid)} className="delete" href="javascript:void(0)"><i className="mdi mdi-delete" /></button>
                    </li>
                </ul>
            </td>
        </tr>)
    }

    return (
        <div className="container">
            <ToastContainer />
            <div className="row">
                <div className="col-12">
                    <section className="checkout-wrapper pt-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="checkout-style-1">
                                        <div className="checkout-table table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <td className="product">Product</td>
                                                        <td className="quantity">Quantity</td>
                                                        <td className="price">Price</td>
                                                        <td className="price">Total</td>
                                                        <td className="action" align='right'>Action</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((item) => displayCartItem(item))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="checkout-coupon-total checkout-coupon-total-2 d-flex flex-wrap">

                                            <div className="checkout-total">
                                                <div className="single-total total-payable">
                                                    <p className="value">Total Payable:</p>
                                                    <p className="price">{totalPayable.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkout-btn d-sm-flex justify-content-between">
                                            <div className="single-btn">
                                                <Link to='/checkout' className="main-btn primary-btn-border">continue
                                                    shopping</Link>
                                            </div>
                                            <div className="single-btn">
                                                <button type="button" className="main-btn primary-btn">Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}