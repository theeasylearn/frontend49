import { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError } from "./message";
import { getBaseImageURL, getBaseURL } from "./common";
import { Link, useParams } from "react-router-dom";
export default function Product() {

    let [data, setData] = useState([]); //state array
    let [isDataFetched, setIsDataFetched] = useState(false);
    let { categoryid } = useParams();
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
                /*
                [
                    {"error":"no"},
                    {"total":3},
                    {"id":"1","categoryid":"1","title":"Acer Laptop","price":"100","stock":"60","weight":"1000","size":"15 inch","photo":"acer.jpg","detail":"WINDOWS 10 4 GB DDR3 RAM 128 gb ssd hard disk","islive":"1","isdeleted":"0","categorytitle":"laptop"},{"id":"2","categoryid":"1","title":"dell laptop","price":"200","stock":"67","weight":"1000","size":"15 inch","photo":"dell.jpg","detail":"WINDOWS 10 8 GB DDR3 RAM 512 gb ssd hard disk","islive":"1","isdeleted":"0","categorytitle":"laptop"},{"id":"178","categoryid":"1","title":"","price":"0","stock":"0","weight":"0","size":"","photo":"wmremove-transformed.jpeg","detail":"","islive":"1","isdeleted":"0","categorytitle":"laptop"}]
                */
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
                    }
                }
            }).catch((error) => {
                showError();
            });
        }
    });

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
                                    <a href="product-details-page.html">{item.title}</a>
                                </h4>
                                <p>{item.stock} Item in left in stock</p>
                                <span className="price">{item.price}</span>
                                <a href="javascript:void(0)" className="main-btn primary-btn">
                                    <img src="assets/images/icon-svg/cart-4.svg" alt />
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>);
                })}
            </div>
        </div>

    );
}