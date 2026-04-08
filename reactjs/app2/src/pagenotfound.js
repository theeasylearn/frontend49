import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      {/* Bootstrap 5 + Funny 404 Page for Online Shop */}
      <div className="container-fluid bg-light min-vh-100 d-flex align-items-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">

              {/* Big funny 404 with shopping cart */}
              <div className="mb-4">
                <h1 
                  className="display-1 fw-bold text-danger mb-0"
                  style={{ fontSize: '9rem', lineHeight: '1' }}
                >
                  404
                </h1>
                <div className="d-inline-flex align-items-center gap-3">
                  <span className="display-4 fw-bold text-warning">🛒</span>
                  <span className="display-4 fw-bold text-warning" style={{ transform: 'rotate(25deg)' }}>💨</span>
                  <span className="display-4 fw-bold text-warning">🛒</span>
                </div>
              </div>

              <h2 className="display-5 fw-bold text-dark mb-3">
                Oops! This page went shopping... and never came back! 😂
              </h2>

              <p className="lead fs-3 text-muted mb-5">
                We looked in every aisle, under the discount rack, 
                even in the lost parcel bin. <br />
                <strong>This page is officially OUT OF STOCK forever.</strong>
              </p>

              {/* Funny reasons card */}
              <div className="card border-0 shadow-lg rounded-4 p-4 mb-5 mx-auto" style={{ maxWidth: '520px' }}>
                <div className="card-body">
                  <h5 className="card-title text-primary mb-3">Warehouse Investigation Report:</h5>
                  <ul className="list-unstyled fs-5 text-start">
                    <li className="mb-2">✅ Checked all 47 aisles</li>
                    <li className="mb-2">✅ Looked behind the sale banners</li>
                    <li className="mb-2">✅ Asked the delivery guy</li>
                    <li className="mb-2 text-danger">❌ Page is still missing (probably binge-watching flash sales)</li>
                  </ul>
                </div>
              </div>

              {/* Action buttons */}
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link 
                  to="/" 
                  className="btn btn-success btn-lg px-5 py-3 fs-5 fw-semibold shadow-sm"
                >
                  🏠 Take me Home (I promise I'll behave)
                </Link>

                <Link 
                  to="/product" 
                  className="btn btn-primary btn-lg px-5 py-3 fs-5 fw-semibold shadow-sm"
                >
                  🛍️ Browse All Products
                </Link>

                <Link 
                  to="/category" 
                  className="btn btn-outline-dark btn-lg px-5 py-3 fs-5 fw-semibold shadow-sm"
                >
                  📦 Explore Categories
                </Link>
              </div>

              <div className="mt-5 pt-4 border-top">
                <p className="text-muted fs-6">
                  Pro shopping tip: Never type random URLs when you're hungry. 
                  Your cart misses you 💕
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;