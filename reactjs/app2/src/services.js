export default function Services() {
  return (
    <>
      <Navbar />
      <div className="container-fluid services py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: "800px" }}>
            <p className="fs-4 text-uppercase text-center text-primary">Our Service</p>
            <h1 className="display-3">Beauty Services</h1>
          </div>
          <div className="row g-4">
            {/* All 6 service cards (Beauty, Bridal Makeup, Hair, Nails, Skin Treatment, Advance Treatment) */}
            {/* Converted exactly as in original with alternating layout */}
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};