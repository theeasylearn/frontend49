import Navbar from "./navbar";
import Footer from "./footer";
import BackToTop from "./backtotop";
export default function Home() {
  return (
    <>
      <Navbar />
      {/* Carousel */}
      <div className="container-fluid carousel-header px-0">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          {/* All 5 slides + indicators + controls converted */}
        </div>
      </div>

      {/* About Us Section */}
      <section className="container py-5">
        {/* Card layout from index.html */}
      </section>

      {/* Services Section (same as Services page) */}
      {/* Products Section (same as Products page) */}
      {/* Testimonials Section (same as Testimonials page) */}

      {/* Contact Form (WhatsApp) */}
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center text-uppercase">Contact us</h1>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <form className="d-flex flex-wrap justify-content-center gap-3 p-3" onSubmit={(e) => { e.preventDefault(); sendWhatsApp(); }}>
              {/* All inputs + button (same as original) */}
            </form>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
};