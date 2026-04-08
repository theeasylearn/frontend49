import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      {/* CATEGORIES SECTION - unchanged */}
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h2 className="display-5 fw-bold">Shop by Category</h2>
          <Link to="/category" className="btn btn-link text-decoration-none fs-5">
            View All Categories →
          </Link>
        </div>

        <div className="row g-4">
          {/* Category cards remain as before (they already link to /category) */}
          <div className="col-lg-3 col-md-4 col-6">
            <Link to="/category" className="text-decoration-none">
              <div className="card h-100 shadow border-0 overflow-hidden">
                <img src="https://picsum.photos/id/1005/400/300" className="card-img-top" alt="Skincare" />
                <div className="card-body text-center py-4">
                  <h5 className="card-title fw-semibold">Skincare</h5>
                  <p className="text-muted small mb-0">Face packs, serums &amp; creams</p>
                </div>
              </div>
            </Link>
          </div>
          {/* ... other 3 category cards unchanged ... */}
        </div>
      </div>

      {/* TRENDING PRODUCTS - NOW CLICKABLE */}
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
            {/* Card 1 - Now clickable */}
            <div className="col-md-6 col-lg-3">
              <Link to="/productdetail" className="text-decoration-none">
                <div className="card shadow h-100 border-0">
                  <img src="img/product-1.jpeg" className="card-img-top" alt="Herbal Glow Face Pack" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Herbal Glow Face Pack</h5>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">Price: ₹450</li>
                      <li className="list-group-item">Weight: 100 g</li>
                    </ul>
                    <p className="card-text text-muted small">
                      Sandalwood, turmeric &amp; aloe vera for natural glow.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-3">
              <Link to="/productdetail" className="text-decoration-none">
                <div className="card shadow h-100 border-0">
                  <img src="https://picsum.photos/id/1005/400/300" className="card-img-top" alt="Lavender Essential Oil" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Lavender Calm Essential Oil</h5>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">Price: ₹320</li>
                      <li className="list-group-item">Volume: 15 ml</li>
                    </ul>
                    <p className="card-text text-muted small">
                      Pure lavender oil for stress relief and better sleep.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-3">
              <Link to="/productdetail" className="text-decoration-none">
                <div className="card shadow h-100 border-0">
                  <img src="https://picsum.photos/id/133/400/300" className="card-img-top" alt="Aloe Vera Gel" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Pure Aloe Vera Gel</h5>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">Price: ₹280</li>
                      <li className="list-group-item">Weight: 200 g</li>
                    </ul>
                    <p className="card-text text-muted small">
                      Soothing gel for sunburns and glowing skin.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 4 */}
            <div className="col-md-6 col-lg-3">
              <Link to="/productdetail" className="text-decoration-none">
                <div className="card shadow h-100 border-0">
                  <img src="https://picsum.photos/id/201/400/300" className="card-img-top" alt="Rose Water Toner" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Organic Rose Water Toner</h5>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">Price: ₹390</li>
                      <li className="list-group-item">Volume: 200 ml</li>
                    </ul>
                    <p className="card-text text-muted small">
                      Hydrating toner that balances skin pH instantly.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* NEW PRODUCTS - NOW CLICKABLE */}
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
          {/* New Card 1 */}
          <div className="col-md-6 col-lg-3">
            <Link to="/productdetail" className="text-decoration-none">
              <div className="card shadow h-100 border-0">
                <img src="https://picsum.photos/id/870/400/300" className="card-img-top" alt="Charcoal Face Mask" />
                <div className="card-body text-center">
                  <h5 className="card-title">Activated Charcoal Mask</h5>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Price: ₹520</li>
                    <li className="list-group-item">Weight: 75 g</li>
                  </ul>
                  <p className="card-text text-muted small">
                    Deep cleansing mask with neem &amp; charcoal.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* New Card 2 */}
          <div className="col-md-6 col-lg-3">
            <Link to="/productdetail" className="text-decoration-none">
              <div className="card shadow h-100 border-0">
                <img src="https://picsum.photos/id/1009/400/300" className="card-img-top" alt="Vitamin C Serum" />
                <div className="card-body text-center">
                  <h5 className="card-title">20% Vitamin C Serum</h5>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Price: ₹680</li>
                    <li className="list-group-item">Volume: 30 ml</li>
                  </ul>
                  <p className="card-text text-muted small">
                    Brightening serum with hyaluronic acid.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* New Card 3 */}
          <div className="col-md-6 col-lg-3">
            <Link to="/productdetail" className="text-decoration-none">
              <div className="card shadow h-100 border-0">
                <img src="https://picsum.photos/id/106/400/300" className="card-img-top" alt="Turmeric Face Oil" />
                <div className="card-body text-center">
                  <h5 className="card-title">Turmeric Glow Face Oil</h5>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Price: ₹410</li>
                    <li className="list-group-item">Volume: 50 ml</li>
                  </ul>
                  <p className="card-text text-muted small">
                    Anti-aging oil for radiant skin.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* New Card 4 */}
          <div className="col-md-6 col-lg-3">
            <Link to="/productdetail" className="text-decoration-none">
              <div className="card shadow h-100 border-0">
                <img src="https://picsum.photos/id/133/400/300" className="card-img-top" alt="Neem Body Lotion" />
                <div className="card-body text-center">
                  <h5 className="card-title">Neem &amp; Coconut Body Lotion</h5>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Price: ₹360</li>
                    <li className="list-group-item">Volume: 250 ml</li>
                  </ul>
                  <p className="card-text text-muted small">
                    Soothing lotion for dry &amp; itchy skin.
                  </p>
                </div>
              </div>
            </Link>
          </div>
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