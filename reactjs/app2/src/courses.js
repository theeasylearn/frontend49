import Navbar from "./navbar";
import Footer from "./footer";
import BackToTop from "./backtotop";

export default function Courses() {
  return (
    <>
      <Navbar />
      <div className="container-fluid products py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <p className="fs-4 text-uppercase text-primary">Our Courses</p>
            <h1 className="display-4 fw-bold">Beauty Courses – Certificate &amp; Diploma Programs</h1>
            <p className="text-muted">Explore our wide range of professional beauty courses designed to help you build a successful career in the beauty and wellness industry.</p>
          </div>

          <div className="row g-4">
            {/* Certificate in Skin Treatments */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <span className="badge bg-primary mb-2">1 Month</span>
                  <h2 className="card-title">Certificate in Skin Treatments</h2>
                  <p className="card-text text-muted">
                    Learn about facials and skin issues like acne, scars, wrinkles, dullness, and sagging.
                    Includes modern treatments like laser, galvanic, ultrasonic, and microdermabrasion.
                  </p>
                </div>
              </div>
            </div>

            {/* Certificate in Basic Beauty Care */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <span className="badge bg-success mb-2">2 Months</span>
                  <h2 className="card-title">Certificate in Basic Beauty Care</h2>
                  <p className="card-text text-muted">
                    Covers skin &amp; body care, facial &amp; body massage, threading, waxing, manicure, pedicure,
                    and makeup (party &amp; bridal). Includes saree draping styles.
                  </p>
                </div>
              </div>
            </div>

            {/* Certificate in Manicure & Pedicure */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <span className="badge bg-info mb-2">1 Month</span>
                  <h2 className="card-title">Certificate in Manicure &amp; Pedicure</h2>
                  <p className="card-text text-muted">
                    Learn deluxe, French, Cleopatra, and paraffin hand &amp; foot care treatments.
                    Includes head massage, hair care, and basic henna designs.
                  </p>
                </div>
              </div>
            </div>

            {/* Diploma in Beauty Culture */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <span className="badge bg-warning text-dark mb-2">3½ Months</span>
                  <h2 className="card-title">Diploma in Beauty Culture</h2>
                  <p className="card-text text-muted">
                    A detailed program covering skin, makeup, body care, aromatherapy, and nail art.
                    Includes machine-based treatments for acne, scars, and pigmentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Certificate in Beauty, Hair & Makeup */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <span className="badge bg-danger mb-2">6 Months</span>
                  <h2 className="card-title">Certificate in Beauty, Hair &amp; Makeup (CBHM)</h2>
                  <p className="card-text text-muted">
                    A complete course covering skincare, massage, facials, bridal &amp; party makeup, hair
                    styling, rebonding, perming, saree draping, and beauty machine use.
                  </p>
                </div>
              </div>
            </div>

            {/* Diploma in Beauty, Hair & Makeup */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <span className="badge bg-dark mb-2">8 Months</span>
                  <h2 className="card-title">Diploma in Beauty, Hair &amp; Makeup (DBHM)</h2>
                  <p className="card-text text-muted">
                    For those aiming for careers in fashion, salons, or glamour industry.
                    Covers advanced bridal &amp; HD makeup, hairstyling, body care, and grooming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};