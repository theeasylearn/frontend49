import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { showError } from "./message";
import { getBaseImageURL, getBaseURL } from "./common";
import { ToastContainer } from "react-toastify";

export default function Home() {

  let [categories, setCategories] = useState([]);
  let [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch Categories
    if (categories.length === 0) {
      let catApiAddress = getBaseURL() + "category.php";
      axios({ url: catApiAddress, method: 'get', responseType: 'json' }).then((response) => {
        let error = response.data[0]['error'];
        if (error === 'no') {
          let total = response.data[1]['total'];
          if (total > 0) {
            response.data.splice(0, 2);
            setCategories(response.data);
          }
        }
      });
    }

    // Fetch Products
    if (products.length === 0) {
      let prodApiAddress = getBaseURL() + "product.php";
      axios({ url: prodApiAddress, method: 'get', responseType: 'json' }).then((response) => {
        let error = response.data[0]['error'];
        if (error === 'no') {
          let total = response.data[1]['total'];
          if (total > 0) {
            response.data.splice(0, 2);
            setProducts(response.data);
          }
        }
      });
    }
  });

  return (
    <>
      {/* CATEGORIES SECTION */}
      <div className="container py-5">
        <ToastContainer />
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h2 className="display-5 fw-bold">Shop by Category</h2>
          <Link to="/category" className="btn btn-link text-decoration-none fs-5">
            View All Categories →
          </Link>
        </div>

        <div className="row g-4">
          {categories.map((item) => {
            return (
              <div className="col-lg-3 col-md-4 col-6" key={item.id}>
                <Link to={"/category/" + item.id} className="text-decoration-none">
                  <div className="card h-100 shadow border-0 overflow-hidden">
                    <img src={getBaseImageURL() + "category/" + item.photo} className="card-img-top" alt={item.title} />
                    <div className="card-body text-center py-4">
                      <h5 className="card-title fw-semibold">{item.title}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      {/* TRENDING PRODUCTS */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <span className="badge bg-warning text-dark fs-6 px-3 py-2">🔥 Trending</span>
              <h2 className="display-5 fw-bold mb-0">Trending This Week</h2>
            </div>
            <Link to="/product" className="btn btn-primary btn-lg px-5">
              View All Trending →
            </Link>
          </div>

          <div className="row g-4">
            {products.slice(0, 3).map((item) => {
              return (
                <div key={item.id} className="col-md-6 col-lg-4">
                  <Link to={"/productdetail/" + item.id} className="text-decoration-none">
                    <div className="card shadow h-100 border-0">
                      <img src={getBaseImageURL() + "product/" + item.photo} className="card-img-top" alt={item.title} />
                      <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <ul className="list-group list-group-flush mb-3">
                          <li className="list-group-item">Price: ₹{item.price}</li>
                          <li className="list-group-item">Stock: {item.stock}</li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* NEW PRODUCTS */}
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <span className="badge bg-success fs-6 px-3 py-2">✨ New Arrivals</span>
            <h2 className="display-5 fw-bold mb-0">Fresh from the Garden</h2>
          </div>
          <Link to="/product" className="btn btn-outline-success btn-lg px-5">
            Explore New Products →
          </Link>
        </div>

        <div className="row g-4">
          {products.slice(3, 6).map((item) => {
            return (
              <div key={item.id} className="col-md-6 col-lg-4">
                <Link to={"/productdetail/" + item.id} className="text-decoration-none">
                  <div className="card shadow h-100 border-0">
                    <img src={getBaseImageURL() + "product/" + item.photo} className="card-img-top" alt={item.title} />
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.title}</h5>
                      <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item">Price: ₹{item.price}</li>
                        <li className="list-group-item">Stock: {item.stock}</li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      {/* FINAL CTA - unchanged */}
      <div className="container-fluid bg-primary text-white py-5 text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">
            Ready to glow from within?
          </h2>
          <p className="lead mb-4">Join 15,000+ happy customers who trust us with their skin &amp; wellness.</p>
          <Link to="/product" className="btn btn-light btn-lg px-5 py-3 fw-bold">
            Start Shopping Today →
          </Link>
        </div>
      </div>
    </>
  );
}