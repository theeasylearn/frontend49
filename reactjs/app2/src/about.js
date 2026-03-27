import Navbar from "./navbar";
import Footer from "./footer";
import BackToTop from "./backtotop";
export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="container about">
        <div className="row py-5">
          <div className="col-lg-5">
            <div className="video position-relative">
              <img src="img/about-1.jpg" className="img-fluid rounded" alt="" />
              <div className="position-absolute rounded border-5 border-top border-start border-white" style={{ bottom: "0", right: "0" }}>
                <img src="img/about-2.jpg" className="img-fluid rounded" alt="" />
              </div>
              <button type="button" className="btn btn-play" data-bs-toggle="modal" data-bs-target="#videoModal">
                <span></span>
              </button>
            </div>
          </div>
          <div className="col-lg-7">
            <p className="fs-4 text-uppercase text-primary">About Us</p>
            <h1 className="display-4 mb-4">Your Best Spa, Beauty &amp; Skin Care Center</h1>
            <p className="mb-4">
              RangRoop has been a trusted name in women’s beauty and wellness since 2000. Based in Bhavnagar, Gujarat,
              we have spent more than two decades redefining what a modern beauty salon can be. Our mission has always
              been simple yet powerful: to combine expertise, innovation, and care to bring out the best in every woman
              who walks through our doors.
            </p>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <i className="fab fa-gitkraken fa-3x text-primary"></i>
                  <div className="ms-4">
                    <h5 className="mb-2">Our Team</h5>
                    <p className="mb-0">20+ expert beauty therapists with an average of 5 years’ experience ensuring personalized care and professional service.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <i className="fas fa-gift fa-3x text-primary"></i>
                  <div className="ms-4">
                    <h5 className="mb-2">Our Achievements</h5>
                    <p className="mb-0">Winners of 2 state government awards and 1 national award for excellence in bridal (Dulhan) makeup.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="my-4">
              Our centrally air-conditioned 2,000 sq. ft. salon is equipped with the latest technology, ISO certification,
              and modern facilities to give you comfort and world-class results. We’ve proudly served more than 50,000
              satisfied customers and continue to raise our standards every day.
            </p>
            <p className="mb-4">
              Over the years, RangRoop has also had the privilege of serving celebrities from Dhollywood, Bollywood, and
              the sports world. For us, beauty is more than appearance—it’s about confidence, self-care, and celebrating
              the best version of yourself. Whether you are preparing for your big day, indulging in relaxation, or
              refreshing your everyday look, RangRoop is here to make you shine brighter.
            </p>
            <a href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5">Explore More</a>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};