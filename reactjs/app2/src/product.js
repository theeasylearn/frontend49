import { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import { getBaseImageURL, getBaseURL } from "./common";
import { Link, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function Product() {

    let [data, setData] = useState([]); //state array
    let [isDataFetched, setIsDataFetched] = useState(false);
    let { categoryid } = useParams();
    let [cookies] = useCookies(['id']);
    //call api inside useeffect hook (this hook has function which will execute after return statement execute)
    useEffect(() => {
        if (isDataFetched === false) {
            //data is not fetched using api (let's fetch it)
            let apiAddress = getBaseURL() + "product.php?categoryid=" + categoryid;
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
                        showError("No product found");
                    }
                    else {
                        response.data.splice(0, 2); //remove 2 object from beginning 
                        setData(response.data);
                        setIsDataFetched(true);
                    }
                }
            }).catch((error) => {
                showError();
            });
        }
    });
    let addToCart = function (productid) {
        console.log("add to cart", productid);
        let apiAddress = getBaseURL() + "add_to_cart.php?productid=" + productid + "&usersid=" + cookies['id'];
        let option = {
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        }
        axios(option).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let message = response.data[1]['message'];
                showMessage(message);
            }
        });
    }
    return (
        <div className="container">
            <ToastContainer />
            <div className="row mt-20 mb-20">
                <div className="col-12 text-center">
                    <h2>Products</h2>
                </div>
                {data.map((item) => {
                    return (<div className="col-lg-6 col-sm-12">
                        <div className="product-style-7 mt-30 shadow">
                            <div className="product-image">
                                <div className="product-active">
                                    <div className="product-item active">
                                        <img src={getBaseImageURL() + "product/" + item.photo} alt="product" />
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="product-content">
                                <ul className="product-meta">
                                    <li>
                                        <a className="add-wishlist" href="javascript:void(0)">
                                            <i className="mdi mdi-heart-outline" />
                                            Add to Favorite
                                        </a>
                                    </li>
                                    
                                </ul>
                                <h4 className="title">
                                    <Link to={"/productdetail/" + item.id}>{item.title}</Link>
                                </h4>
                                <p>{item.stock} Item in left in stock</p>
                                <span className="price">{item.price}</span>
                                <button onClick={(e) => addToCart(item.id)} type="button" className="main-btn primary-btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>);
                })}
            </div>
        </div>

    );
}