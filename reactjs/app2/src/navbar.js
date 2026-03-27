export default function Navbar() {
  return (
    <div className="container-fluid sticky-top px-0">
      {/* Topbar */}
      <div className="container-fluid topbar d-none d-lg-block">
        <div className="container px-0">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex flex-wrap">
                <a href="tel:+01234567890" className="me-4 text-light">
                  <i className="fas fa-phone-alt text-primary me-2"></i>+01234567890
                </a>
                <a href="mailto:info@rooprang.com" className="text-light">
                  <i className="fas fa-envelope text-primary me-2"></i>info@rooprang.com
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-center justify-content-end">
                <a href="https://www.instagram.com/the_easylearn_academy/" className="me-3 btn-square border rounded-circle nav-fill">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="me-3 btn-square border rounded-circle nav-fill">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/the_easylearn_academy/" className="me-3 btn-square border rounded-circle nav-fill">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="btn-square border rounded-circle nav-fill">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container-fluid bg-light">
        <div className="container px-0">
          <nav className="navbar navbar-light navbar-expand-xl">
            <Link href="/" className="navbar-brand">
              <h1 className="text-primary display-4">RoopRang</h1>
            </a>
            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div className="collapse navbar-collapse bg-light py-3" id="navbarCollapse">
              <div className="navbar-nav mx-auto border-top">
                <Link to="/" className="nav-item nav-link">Home</link>
                <Link to="/about" className="nav-item nav-link">About us</link>
                <Link to="/services" className="nav-item nav-link">Services</link>
                <Link to="/products" className="nav-item nav-link">Products</link>
                <Link to="/courses" className="nav-item nav-link">Courses</link>
                <Link to="/gallery" className="nav-item nav-link">Gallery</link>
                <Link to="/testimonials" className="nav-item nav-link">Testimonials</link>
                <Link to="/contact" className="nav-item nav-link">Contact Us</link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};