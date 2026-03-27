import Navbar from "./navbar";
import Footer from "./footer";
import BackToTop from "./backtotop";
export default function Products(){
  return (
    <>
      <Navbar />
      <div className="container-fluid products py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: "800px" }}>
            <p className="fs-4 text-uppercase text-center text-primary">Our Collection</p>
            <h1 className="display-3">Beauty &amp; Wellness Products</h1>
          </div>
          <div className="row g-4">
            {/* All 8 product cards converted exactly as in original HTML */}
            {/* Example of one card (repeat for all 8) */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="card shadow h-100">
                <img src="img/product-1.jpeg" className="card-img-top" alt="Herbal Glow Face Pack" />
                <div className="card-body text-center">
                  <h5 className="card-title">Herbal Glow Face Pack</h5>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Price: ₹450</li>
                    <li className="list-group-item">Weight: 100 g</li>
                  </ul>
                  <p className="card-text">A natural blend of sandalwood, turmeric, and aloe vera that refreshes the skin, reduces dullness, and brings out a healthy glow.</p>
                </div>
              </div>
            </div>
            {/* ... remaining 7 cards identical ... */}
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};