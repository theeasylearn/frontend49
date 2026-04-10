import { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError } from "./message";
import { getBaseImageURL, getBaseURL } from "./common";
export default function Category() {

    let [data, setData] = useState([]);

    //call api inside useeffect hook (this hook has function which will execute after return statement execute)
    useEffect(() => {
        //1st create variable that store apiAddress 
        let apiAddress = getBaseURL() + "category.php";
        let options = {
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        };
        //api call
        axios(options).then((response) => {
            //this arrow function run only after api fetch data from server 
            console.log(response.data);
            //get error detail
            /*
            [
                {"error":"no"},
                {"total":12},
                {"id":"1","title":"laptop","photo":"laptop.jpg","islive":"1","isdeleted":"0"},{"id":"2","title":"mobile","photo":"mobile.jpg","islive":"1","isdeleted":"0"},{"id":"3","title":"book","photo":"books.jpg","islive":"1","isdeleted":"0"},
                {"id":"4","title":"Cookies & waffers","photo":"Cookies.jpg","islive":"1","isdeleted":"0"},{"id":"5","title":"Washing Powders","photo":"washing_powders.jpg","islive":"1","isdeleted":"0"},{"id":"6","title":"shampoo","photo":"shampoo.jpg","islive":"1","isdeleted":"0"},{"id":"39","title":"drill machine","photo":"WhatsApp Image 2026-01-25 at 1.25.28 PM.jpeg","islive":"1","isdeleted":"0"},{"id":"40","title":"abc","photo":"5.jpg","islive":"1","isdeleted":"0"},{"id":"41","title":"PROCESSOR","photo":"WhatsApp Image 2026-02-12 at 10.29.22 AM.jpeg","islive":"0","isdeleted":"0"},{"id":"42","title":"Books","photo":"k2.webp","islive":"1","isdeleted":"0"},{"id":"43","title":"suit","photo":"wmremove-transformed-2.webp","islive":"1","isdeleted":"0"},{"id":"44","title":"chair","photo":"Gemini_Generated_Image_9sl7s49sl7s49sl7.png","islive":"1","isdeleted":"0"}]
            */
            let error = response.data[0]['error']; //error variable has value of error key
            if (error !== 'no') {
                showError(error);
            }
            else {
                //there is no error
                //fetch total
                let total = response.data[1]['total'];
                if (total === 0) {
                    showError('category not found');
                }
                else {
                    //delete 2 elements from beginning 
                    response.data.splice(0,2);
                    setData(response.data);
                }
            }
        }).catch((error) => {
            //https://fkhadra.github.io/react-toastify/introduction/
            showError();
        });
    });
    return (
        <div className="container">
            <ToastContainer />
            <div className="row mt-20 mb-20">
                <div className="col-12 text-center">
                    <h2>Categories</h2>
                </div>
                {data.map((item) => {
                    return (<div className="col-lg-3 col-sm-4 ">
                        <div className="card shadow">
                            <img src={getBaseImageURL() + "category/" + item.photo} className="card-img-top" />
                            <div className="card-body">
                                <h4 className="title text-center">
                                    <a href="product-details-page.html">{item.title}</a>
                                </h4>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
}