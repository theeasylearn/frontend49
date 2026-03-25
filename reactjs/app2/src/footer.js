export default function Footer(){
  return (
    <div className="container-fluid footer py-5">
      <div className="container py-5">
        <div className="row g-5">
          {/* Services Links */}
          <div className="col-md-4 col-lg-4 col-xl-4">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">Our Services</h4>
              <a href="/"><i className="fas fa-angle-right me-2"></i>Home</a>
              <a href="/about"><i className="fas fa-angle-right me-2"></i>About us</a>
              <a href="/services"><i className="fas fa-angle-right me-2"></i>Services</a>
              <a href="/products"><i className="fas fa-angle-right me-2"></i>Products</a>
              <a href="/courses"><i className="fas fa-angle-right me-2"></i>Courses</a>
              <a href="/gallery"><i className="fas fa-angle-right me-2"></i>Gallary</a>
              <a href="/testimonials"><i className="fas fa-angle-right me-2"></i>Testimonials</a>
              <a href="/contact"><i className="fas fa-angle-right me-2"></i>Contact Us</a>
            </div>
          </div>

          {/* Schedule & Address */}
          <div className="col-md-4 col-lg-4 col-xl-4">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">Schedule</h4>
              <p className="text-muted mb-0">Monday: <span className="text-white">09:00 am – 10:00 pm</span></p>
              <p className="text-muted mb-0">Saturday: <span className="text-white">09:00 am – 08:00 pm</span></p>
              <p className="text-muted mb-0">Sunday: <span className="text-white">09:00 am – 05:00 pm</span></p>
              <h4 className="my-4 text-white">Address</h4>
              <p className="mb-0">
                <i className="fas fa-map-marker-alt text-secondary me-2"></i>
                223, opp eva surbhi, near aksharwadi temple, bhavnagar
              </p>
            </div>
          </div>

          {/* Follow & Contact */}
          <div className="col-md-4 col-lg-4 col-xl-4">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">Follow Us</h4>
              <a href="https://www.instagram.com/the_easylearn_academy/"><i className="fas fa-angle-right me-2"></i>Facebook</a>
              <a href="https://www.instagram.com/the_easylearn_academy/"><i className="fas fa-angle-right me-2"></i>Instagram</a>
              <a href="#"><i className="fas fa-angle-right me-2"></i>Twitter</a>
              <h4 className="my-4 text-white">Contact Us</h4>
              <p className="mb-0"><i className="fas fa-envelope text-secondary me-2"></i>info@rooprang.com</p>
              <p className="mb-0"><i className="fas fa-phone text-secondary me-2"></i>+ 0123456789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};