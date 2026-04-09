import { useEffect } from "react";
import axios from 'axios';
export default function Category() {
    
    //call api inside useeffect hook (this hook has function which will execute after return statement execute)
    useEffect(() => {
        //1st create variable that store apiAddress 
        let apiAddress = "https://theeasylearnacademy.com/shop/ws/category.php";
        let options = {
            url:apiAddress,
            method:'get',
            responseType:'json'
        };
        //api call
        axios(options).then((response) => {
            //this arrow function run only after api fetch data from server 
        }).catch((error) => {
            //https://fkhadra.github.io/react-toastify/introduction/
        });
    });
    return (
        <div className="container">
            <div className="row mt-20 mb-20">
                <div className="col-12 text-center">
                    <h2>Categories</h2>
                </div>
                <div className="col-lg-3 col-sm-4 ">
                    <div className="card shadow">
                        <img src="https://picsum.photos/300?random=1" className="card-img-top" />
                        <div className="card-body">
                            <h4 className="title text-center">
                                <a href="product-details-page.html">Metro 38 Date</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}