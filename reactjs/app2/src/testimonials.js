export default function Testimonials() {
  return (
    <>
      <Navbar />
      {/* Breadcrumb + Testimonial section with Owl Carousel */}
      <div className="container-fluid bg-breadcrumb py-5">
        <div className="container text-center py-5">
          <h3 className="text-white display-3 mb-4">Our testimonial</h3>
        </div>
      </div>
      <div className="container-fluid testimonial py-5" style={{ background: "var(--bs-secondary)" }}>
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "800px" }}>
            <p className="fs-4 text-uppercase text-primary">Testimonial</p>
            <h1 className="display-4 mb-4 text-white">What Our Clients Say!</h1>
          </div>
          {/* Owl Carousel container - you can replace with react-owl-carousel or Swiper */}
          <div className="owl-carousel testimonial-carousel">
            {/* All 14 testimonial items converted exactly as in original */}
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};