import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { showError } from "./message";
import { getBaseImageURL, getBaseURL } from "./common";
import { ToastContainer } from "react-toastify";

export default function ProductDetail() {
    let { productid } = useParams();
    let [product, setProduct] = useState(null);

    useEffect(() => {
        if (product === null) {
            let apiAddress = getBaseURL() + "product.php?productid=" + productid;
            let options = {
                url: apiAddress,
                method: 'get',
                responseType: 'json'
            };

            axios(options).then((response) => {
                let error = response.data[0]['error'];
                if (error !== 'no') {
                    showError(error);
                } else {
                    let total = response.data[1]['total'];
                    if (total === 0) {
                        showError("Product not found");
                    } else {
                        // Data starts at index 2
                        setProduct(response.data[2]);
                    }
                }
            }).catch((error) => {
                showError();
            });
        }
    });

    if (product === null) {
        return <div className="p-5 text-center">Loading...</div>;
    }

    return (
        <div className="container">
            <ToastContainer />
            <div className="row">
                <div className="col-12 mt-30 mb-30">
                    <div className="card shadow">
                        <div className="card-header">
                            <h2>{product.title}</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 text-center">
                                    <img src={getBaseImageURL() + "product/" + product.photo} className="img-fluid rounded shadow-sm" alt={product.title} />
                                </div>
                                <div className="col-lg-8">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td width="40%">ID</td>
                                                <td>{product.id}</td>
                                            </tr>
                                            <tr>
                                                <td width="40%">Category</td>
                                                <td>{product.categoryid}</td>
                                            </tr>
                                            <tr>
                                                <td width="40%">Price</td>
                                                <td>₹{product.price}</td>
                                            </tr>
                                            <tr>
                                                <td width="40%">Stock</td>
                                                <td>{product.stock} items left</td>
                                            </tr>
                                            <tr>
                                                <td width="40%">Weight</td>
                                                <td>{product.weight}</td>
                                            </tr>
                                            <tr>
                                                <td width="40%">Size</td>
                                                <td>{product.size}</td>
                                            </tr>
                                            <tr>
                                                <td width="40%">Detail</td>
                                                <td>{product.detail}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <button className="btn btn-primary me-2">Add to cart</button>
                                                    <button className="btn btn-info">Add to wishlist</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}