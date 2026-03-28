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

      <div>
        {/* Carosel */}
        <div className="container-fluid carousel-header px-0">
          <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselId" data-bs-slide-to={0} className="active" />
              <li data-bs-target="#carouselId" data-bs-slide-to={1} />
              <li data-bs-target="#carouselId" data-bs-slide-to={2} />
              <li data-bs-target="#carouselId" data-bs-slide-to={3} />
              <li data-bs-target="#carouselId" data-bs-slide-to={4} />
            </ol>
            <div className="carousel-inner" role="listbox">
              {/* Slide 1 - Welcome */}
              <div className="carousel-item active">
                <img src="img/carosel-1.png" className="img-fluid" alt="Beauty Salon" />
                <div className="carousel-caption">
                  <div className="p-3" style={{ "max-width": "900px" }}>
                    <h4 className="text-primary text-uppercase mb-3">Your Trusted Beauty Salon</h4>
                    <h1 className="display-1 text-capitalize text-dark mb-3">Where Beauty Meets Confidence</h1>
                    <p className="mx-md-5 fs-4 px-4 mb-5 text-dark">Step into a world of care and creativity — from
                      skincare to hair, makeup, and wellness treatments.</p>
                  </div>
                </div>
              </div>
              {/* Slide 2 - Services */}
              <div className="carousel-item">
                <img src="img/carosel-2.png" className="img-fluid" alt="Salon Services" />
                <div className="carousel-caption">
                  <div className="p-3" style={{ "max-width": "900px" }}>
                    <h4 className="text-primary text-uppercase mb-3">Professional Services</h4>
                    <h1 className="display-1 text-capitalize text-dark mb-3">Complete Beauty Solutions</h1>
                    <p className="mx-md-5 fs-4 px-4 mb-5 text-dark">Bridal Makeup • Skin Care • Hair Styling • Nails
                      • Body Polishing • Advanced Treatments</p>
                  </div>
                </div>
              </div>
              {/* Slide 3 - Courses */}
              <div className="carousel-item">
                <img src="img/carosel-2.png" className="img-fluid" alt="Beauty Courses" />
                <div className="carousel-caption">
                  <div className="p-3" style={{ "max-width": "900px" }}>
                    <h4 className="text-primary text-uppercase mb-3">Beauty Academy</h4>
                    <h1 className="display-1 text-capitalize text-dark mb-3">Learn. Create. Shine.</h1>
                    <p className="mx-md-5 fs-4 px-4 mb-5 text-dark">Certificate &amp; Diploma programs in Beauty, Hair,
                      Makeup, and Advanced Treatments.</p>
                  </div>
                </div>
              </div>
              {/* Slide 4 - Products */}
              <div className="carousel-item">
                <img src="img/carosel-2.png" className="img-fluid" alt="Beauty Products" />
                <div className="carousel-caption">
                  <div className="p-3" style={{ "max-width": "900px" }}>
                    <h4 className="text-primary text-uppercase mb-3">Salon Products</h4>
                    <h1 className="display-1 text-capitalize text-dark mb-3">Nature-Powered Beauty</h1>
                    <p className="mx-md-5 fs-4 px-4 mb-5 text-dark">Explore our herbal and professional products
                      that nourish and enhance your natural glow.</p>
                  </div>
                </div>
              </div>
              {/* Slide 5 - Testimonials */}
              <div className="carousel-item">
                <img src="img/carosel-1.png" className="img-fluid" alt="Happy Clients" />
                <div className="carousel-caption">
                  <div className="p-3" style={{ "max-width": "900px" }}>
                    <h4 className="text-primary text-uppercase mb-3">Our Happy Clients</h4>
                    <h1 className="display-1 text-capitalize text-dark mb-3">Loved by Many</h1>
                    <p className="mx-md-5 fs-4 px-4 mb-5 text-dark">Trusted by customers and students alike for
                      quality, creativity, and personalized care.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* Carosel */}
        {/* About us */}
        {/* About Us - Bootstrap 5 container */}
        <section className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
                <div className="row g-0">
                  {/* Text Column */}
                  <div className="col-md-8">
                    <div className="p-5">
                      <p className="fs-6 text-uppercase text-primary mb-2">About Us</p>
                      <h2 className="display-6 mb-4">Professional Beauty &amp; Wellness Academy</h2>
                      <p className="lead mb-4">
                        We are a professional beauty and wellness academy dedicated to providing
                        high-quality training and services
                        in the fields of beauty, hair, makeup, and skincare. Our mission is to empower
                        individuals with the latest
                        techniques, practical knowledge, and confidence to build a successful career in the
                        beauty industry. With a
                        team of skilled trainers, modern equipment, and carefully designed courses, we
                        ensure every student learns both
                        the fundamentals and advanced practices.
                      </p>
                      <p className="lead mb-0">
                        Along with training, we also offer a range of beauty services including skincare,
                        hair care, body treatments,
                        and makeup, tailored to meet the needs of our clients. Our focus is on excellence,
                        creativity, and customer
                        satisfaction, making us a trusted name in beauty education and services.
                      </p>
                    </div>
                  </div>
                  {/* Highlights / CTA Column */}
                  <div className="col-md-4 bg-light">
                    <div className="p-4 h-100 d-flex flex-column justify-content-between">
                      <ul className="list-unstyled mb-4">
                        <li className="d-flex mb-3">
                          <span className="badge bg-primary rounded-pill me-3 align-self-start p-2"><i className="fas fa-chalkboard-teacher" /></span>
                          <div>
                            <strong>Expert Trainers</strong>
                            <div className="small text-muted">Skilled tutors with industry experience</div>
                          </div>
                        </li>
                        <li className="d-flex mb-3">
                          <span className="badge bg-primary rounded-pill me-3 align-self-start p-2"><i className="fas fa-microscope" /></span>
                          <div>
                            <strong>Modern Equipment</strong>
                            <div className="small text-muted">Hands-on practice with advanced tools</div>
                          </div>
                        </li>
                        <li className="d-flex mb-3">
                          <span className="badge bg-primary rounded-pill me-3 align-self-start p-2"><i className="fas fa-book-open" /></span>
                          <div>
                            <strong>Practical Courses</strong>
                            <div className="small text-muted">From certificates to postgraduate diplomas
                            </div>
                          </div>
                        </li>
                        <li className="d-flex">
                          <span className="badge bg-primary rounded-pill me-3 align-self-start p-2"><i className="fas fa-spa" /></span>
                          <div>
                            <strong>Full Service Range</strong>
                            <div className="small text-muted">Skincare, hair, body treatments &amp; makeup</div>
                          </div>
                        </li>
                      </ul>
                      <div className="d-grid gap-2">
                        <a href="site_course.html" className="btn btn-primary btn-lg rounded-pill">View
                          Courses</a>
                        <a href="site_service.html" className="btn btn-outline-primary btn-lg rounded-pill">Explore
                          Services</a>
                      </div>
                    </div>
                  </div>
                </div> {/* row g-0 */}
              </div> {/* card */}
            </div> {/* col-lg-10 */}
          </div> {/* row */}
        </section>
        {/* About us */}
        {/* Services */}
        <div className="container-fluid services py-5">
          <div className="container py-5">
            <div className="mx-auto text-center mb-5" style={{ "max-width": "800px" }}>
              <p className="fs-4 text-uppercase text-center text-primary">Our Service</p>
              <h1 className="display-3">Beauty Services</h1>
            </div>
            <div className="row g-4">
              {/* Beauty */}
              <div className="col-lg-6">
                <div className="services-item bg-light border-4 border-end border-primary rounded p-4">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <div className="services-content text-end">
                        <h3>Beauty</h3>
                        <p>At RangRoop, beauty is more than skin deep—it’s about confidence and
                          self-expression. From cleanups and threading to advanced treatments, our experts
                          ensure you always look and feel your best.</p>
                        <a href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make
                          Order</a>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="services-img d-flex align-items-center justify-content-center rounded">
                        <img src="img/gallery-1.jpg" className="img-fluid rounded" alt="Beauty Service" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bridal Makeup */}
              <div className="col-lg-6">
                <div className="services-item bg-light border-4 border-start border-primary rounded p-4">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <div className="services-img d-flex align-items-center justify-content-center rounded">
                        <img src="img/about-2.jpg" className="img-fluid rounded" alt="Bridal Makeup" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="services-content text-start">
                        <h3>Bridal Makeup</h3>
                        <p>Make your big day unforgettable with our bridal makeup services. We blend
                          tradition and modern artistry to create a flawless look that reflects your style
                          and enhances your natural beauty.</p>
                        <a href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make
                          Order</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hair */}
              <div className="col-lg-6">
                <div className="services-item bg-light border-4 border-end border-primary rounded p-4">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <div className="services-content text-end">
                        <h3>Hair</h3>
                        <p>From stylish cuts and coloring to keratin and smoothening, our expert stylists
                          design looks that are both trendy and manageable, tailored to your lifestyle and
                          hair type.</p>
                        <a href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make
                          Order</a>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="services-img d-flex align-items-center justify-content-center rounded">
                        <img src="img/hair-spa1.webp" className="img-fluid rounded" alt="Hair Service" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Nails */}
              <div className="col-lg-6">
                <div className="services-item bg-light border-4 border-start border-primary rounded p-4">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <div className="services-img d-flex align-items-center justify-content-center rounded">
                        <img src="img/nail.jpeg" className="img-fluid rounded" alt="Nail Service" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="services-content text-start">
                        <h3>Nails</h3>
                        <p>From manicures and pedicures to gel polish, extensions, and creative nail art, we
                          ensure your nails look gorgeous while maintaining top-notch hygiene and care.
                        </p>
                        <a href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make
                          Order</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Skin Treatment */}
              <div className="col-lg-6">
                <div className="services-item bg-light border-4 border-end border-primary rounded p-4">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <div className="services-content text-end">
                        <h3>Skin Treatment</h3>
                        <p>Our customized treatments target acne, pigmentation, dullness, and aging with
                          advanced techniques and premium products to restore your skin’s natural glow.
                        </p>
                        <a href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make
                          Order</a>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="services-img d-flex align-items-center justify-content-center rounded">
                        <img src="img/skin.jpeg" className="img-fluid rounded" alt="Skin Treatment" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Advance Treatment */}
              <div className="col-lg-6">
                <div className="services-item bg-light border-4 border-start border-primary rounded p-4">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <div className="services-img d-flex align-items-center justify-content-center rounded">
                        <img src="img/hydra.webp" className="img-fluid rounded" alt="Advanced Treatment" />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="services-content text-start">
                        <h3>Advance Treatment</h3>
                        <p>Experience science-backed beauty solutions with our advanced therapies, including
                          non-invasive facials and anti-aging treatments for visible, lasting results.</p>
                        <a href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Make
                          Order</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        {/* product */}
        <div className="container-fluid products py-5">
          <div className="container py-5">
            <div className="mx-auto text-center mb-5" style={{ "max-width": "800px" }}>
              <p className="fs-4 text-uppercase text-center text-primary">Our Collection</p>
              <h1 className="display-3">Beauty &amp; Wellness Products</h1>
            </div>
            <div className="row g-4">
              {/* Product 1 */}
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="card shadow h-100">
                  <img src="img/product-1.jpeg" className="card-img-top" alt="Herbal Glow Face Pack" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Herbal Glow Face Pack</h5>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">Price: ₹450</li>
                      <li className="list-group-item">Weight: 100 g</li>
                    </ul>
                    <p className="card-text">A natural blend of sandalwood, turmeric, and aloe vera that refreshes
                      the skin, reduces dullness, and brings out a healthy glow.</p>
                  </div>
                </div>
              </div>
              {/* Product 2 */}
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="card shadow h-100">
                  <img src="img/product-1.jpeg" className="card-img-top" alt="Radiance Day Cream" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Radiance Day Cream</h5>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">Price: ₹799</li>
                      <li className="list-group-item">Weight: 50 g</li>
                    </ul>
                    <p className="card-text">A lightweight daily cream enriched with SPF 30 to protect skin from sun
                      damage while keeping it hydrated and radiant.</p>
                  </div>
                </div>
              </div>
              {/* Product 3 */}
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="card shadow h-100">
                  <img src="img/product-1.jpeg" className="card-img-top" alt="Nourishing Hair Oil" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Nourishing Hair Oil</h5>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">Price: ₹650</li>
                      <li className="list-group-item">Weight: 200 ml</li>
                    </ul>
                    <p className="card-text">A blend of coconut, almond, and argan oil that strengthens hair from
                      root to tip, reduces frizz, and promotes shine.</p>
                  </div>
                </div>
              </div>
              {/* Product 4 */}
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="card shadow h-100">
                  <img src="img/product-1.jpeg" className="card-img-top" alt="Hydrating Body Lotion" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Hydrating Body Lotion</h5>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">Price: ₹550</li>
                      <li className="list-group-item">Weight: 250 ml</li>
                    </ul>
                    <p className="card-text">A non-greasy lotion infused with cocoa butter and vitamin E that deeply
                      moisturizes dry skin and keeps it soft all day.</p>
                  </div>
                </div>
              </div>
              {/* Product 5 */}
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="card shadow h-100">
                  <img src="img/product-1.jpeg" className="card-img-top" alt="Revive Herbal Shampoo" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Revive Herbal Shampoo</h5>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">Price: ₹720</li>
                      <li className="list-group-item">Weight: 300 ml</li>
                    </ul>
                    <p className="card-text">Gentle, sulfate-free shampoo with neem and hibiscus extracts to cleanse
                      the scalp, reduce dandruff, and improve hair texture.</p>
                  </div>
                </div>
              </div>
              {/* Product 6 */}
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="card shadow h-100">
                  <img src="img/product-1.jpeg" className="card-img-top" alt="Soft Touch Hand Cream" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Soft Touch Hand Cream</h5>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">Price: ₹299</li>
                      <li className="list-group-item">Weight: 75 g</li>
                    </ul>
                    <p className="card-text">A quick-absorbing cream with shea butter and almond oil that repairs
                      dry hands and leaves them smooth and supple.</p>
                  </div>
                </div>
              </div>
              {/* Product 7 */}
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="card shadow h-100">
                  <img src="img/product-1.jpeg" className="card-img-top" alt="Refreshing Rose Toner" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Refreshing Rose Toner</h5>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">Price: ₹380</li>
                      <li className="list-group-item">Weight: 120 ml</li>
                    </ul>
                    <p className="card-text">Alcohol-free toner made from pure rose water that balances skin pH,
                      tightens pores, and gives a cooling effect.</p>
                  </div>
                </div>
              </div>
              {/* Product 8 */}
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="card shadow h-100">
                  <img src="img/product-1.jpeg" className="card-img-top" alt="Bridal Makeup Kit" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Bridal Makeup Kit</h5>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item">Price: ₹2,499</li>
                      <li className="list-group-item">Weight: 1 Set</li>
                    </ul>
                    <p className="card-text">A complete kit including foundation, compact, lipsticks, eyeshadow
                      palette, and blush — perfect for brides-to-be and special occasions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* product */}
        {/* testimoninals */}
        <div className="container-fluid testimonial py-5" style={{ "background": "var(--bs-secondary)" }}>
          <div className="container py-5">
            <div className="text-center mx-auto mb-5" style={{ "max-width": "800px" }}>
              <p className="fs-4 text-uppercase text-primary">Testimonial</p>
              <h1 className="display-4 mb-4 text-white">What Our Clients Say!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              {/* Beauty - Riya Shah */}
              <div className="testimonial-item rounded p-4">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ "border": "dashed", "border-color": "var(--bs-white)" }}>
                        <img src="img/girl-1.png" className="img-fluid rounded-circle" alt="Riya Shah" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Riya Shah</h4>
                        <p className="m-0 text-white">School Teacher</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ "top": "20px", "right": "25px" }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                      <p className="fs-5 mb-0 text-white">RangRoop is my favorite place for regular beauty care.
                        The staff is gentle, professional, and makes me feel pampered every time.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Beauty - Neha Joshi */}
              <div className="testimonial-item rounded p-4">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ "border": "dashed", "border-color": "var(--bs-white)" }}>
                        <img src="img/girl-2.png" className="img-fluid rounded-circle" alt="Neha Joshi" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Neha Joshi</h4>
                        <p className="m-0 text-white">Chartered Accountant</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ "top": "20px", "right": "25px" }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <p className="fs-5 mb-0 text-white">I usually go for cleanups and threading here. The place
                        is clean, hygienic, and the results are always consistent.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bridal Makeup - Aarti Patel */}
              <div className="testimonial-item rounded p-4">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ "border": "dashed", "border-color": "var(--bs-white)" }}>
                        <img src="img/girl-1.png" className="img-fluid rounded-circle" alt="Aarti Patel" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Aarti Patel</h4>
                        <p className="m-0 text-white">Fashion Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ "top": "20px", "right": "25px" }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                      <p className="fs-5 mb-0 text-white">I chose RangRoop for my bridal makeup and it was the
                        best decision. They gave me a natural yet elegant look that lasted all day.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bridal Makeup - Shruti Desai */}
              <div className="testimonial-item rounded p-4">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ "border": "dashed", "border-color": "var(--bs-white)" }}>
                        <img src="img/girl-2.png" className="img-fluid rounded-circle" alt="Shruti Desai" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Shruti Desai</h4>
                        <p className="m-0 text-white">Doctor</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ "top": "20px", "right": "25px" }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                      <p className="fs-5 mb-0 text-white">From pre-wedding skincare to my bridal look, everything
                        was handled perfectly. I felt confident and beautiful on my big day.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hair - Priya Mehta */}
              <div className="testimonial-item rounded p-4">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ "border": "dashed", "border-color": "var(--bs-white)" }}>
                        <img src="img/girl-2.png" className="img-fluid rounded-circle" alt="Priya Mehta" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Priya Mehta</h4>
                        <p className="m-0 text-white">Software Engineer</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ "top": "20px", "right": "25px" }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                      <p className="fs-5 mb-0 text-white">I tried a haircut and keratin treatment at RangRoop. My
                        hair feels so soft and manageable now. Totally worth it!</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hair - Kavya Trivedi */}
              <div className="testimonial-item rounded p-4">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ "border": "dashed", "border-color": "var(--bs-white)" }}>
                        <img src="img/girl-2.png" className="img-fluid rounded-circle" alt="Kavya Trivedi" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Kavya Trivedi</h4>
                        <p className="m-0 text-white">College Student</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ "top": "20px", "right": "25px" }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <p className="fs-5 mb-0 text-white">The hairstylists really understand what suits your face.
                        I loved my new style and got so many compliments.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Nails - Manisha Vora */}
              <div className="testimonial-item rounded p-4">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ "border": "dashed", "border-color": "var(--bs-white)" }}>
                        <img src="img/girl-1.png" className="img-fluid rounded-circle" alt="Manisha Vora" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Manisha Vora</h4>
                        <p className="m-0 text-white">Boutique Owner</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ "top": "20px", "right": "25px" }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                      <p className="fs-5 mb-0 text-white">Their nail art is so creative! I always get compliments
                        after visiting RangRoop for manicures and extensions.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Nails - Sneha Parmar */}
              <div className="testimonial-item rounded p-4">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ "border": "dashed", "border-color": "var(--bs-white)" }}>
                        <img src="img/girl-1.png" className="img-fluid rounded-circle" alt="Sneha Parmar" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Sneha Parmar</h4>
                        <p className="m-0 text-white">Marketing Executive</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ "top": "20px", "right": "25px" }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <p className="fs-5 mb-0 text-white">Very hygienic and professional service. The gel polish
                        lasted much longer than I expected.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Skin Treatment - Komal Shah */}
              <div className="testimonial-item rounded p-4">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ "border": "dashed", "border-color": "var(--bs-white)" }}>
                        <img src="img/girl-2.png" className="img-fluid rounded-circle" alt="Komal Shah" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Komal Shah</h4>
                        <p className="m-0 text-white">Homemaker</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ "top": "20px", "right": "25px" }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                      <p className="fs-5 mb-0 text-white">I had pigmentation issues and the skin treatment here
                        made a huge difference. My skin feels fresh and glowing.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Skin Treatment - Drishti Chavda */}
              <div className="testimonial-item rounded p-4">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ "border": "dashed", "border-color": "var(--bs-white)" }}>
                        <img src="img/girl-1.png" className="img-fluid rounded-circle" alt="Drishti Chavda" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Drishti Chavda</h4>
                        <p className="m-0 text-white">Dentist</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ "top": "20px", "right": "25px" }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <p className="fs-5 mb-0 text-white">The therapists explained every step of the treatment and
                        I felt very comfortable. My acne marks have visibly reduced.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Advance Treatment - Pooja Rana */}
              <div className="testimonial-item rounded p-4">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ "border": "dashed", "border-color": "var(--bs-white)" }}>
                        <img src="img/girl-2.png" className="img-fluid rounded-circle" alt="Pooja Rana" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Pooja Rana</h4>
                        <p className="m-0 text-white">Banker</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ "top": "20px", "right": "25px" }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                      <p className="fs-5 mb-0 text-white">I tried their anti-aging therapy and the results were
                        fantastic. My skin looks firmer and younger.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Advance Treatment - Sonal Bhatt */}
              <div className="testimonial-item rounded p-4">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ "border": "dashed", "border-color": "var(--bs-white)" }}>
                        <img src="img/girl-1.png" className="img-fluid rounded-circle" alt="Sonal Bhatt" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Sonal Bhatt</h4>
                        <p className="m-0 text-white">Architect</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ "top": "20px", "right": "25px" }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <p className="fs-5 mb-0 text-white">They use advanced machines and techniques that you don’t
                        find everywhere in Bhavnagar. Totally recommend!</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Body Polishing - Alisha Gohil */}
              <div className="testimonial-item rounded p-4">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ "border": "dashed", "border-color": "var(--bs-white)" }}>
                        <img src="img/girl-2.png" className="img-fluid rounded-circle" alt="Alisha Gohil" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Alisha Gohil</h4>
                        <p className="m-0 text-white">Lecturer</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ "top": "20px", "right": "25px" }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                      <p className="fs-5 mb-0 text-white">I booked a body polishing session before a family
                        wedding and my skin was glowing. Felt so relaxed too.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Body Polishing - Hetal Panchal */}
              <div className="testimonial-item rounded p-4">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ "border": "dashed", "border-color": "var(--bs-white)" }}>
                        <img src="img/girl-1.png" className="img-fluid rounded-circle" alt="Hetal Panchal" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Hetal Panchal</h4>
                        <p className="m-0 text-white">HR Manager</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ "top": "20px", "right": "25px" }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                      </div>
                      <p className="fs-5 mb-0 text-white">It’s the best self-care treatment I’ve had in a long
                        time. My skin feels soft, smooth, and nourished.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimoninals */}
        {/* contact us */}
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center text-uppercase">Contact us</h1>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <form id="whatsappForm" className="d-flex flex-wrap justify-content-center gap-3 p-3">
                <input type="text" id="name" className="form-control" placeholder="Your First Name" style={{ "max-width": "180px" }} />
                <input type="email" id="email" className="form-control" placeholder="Your Email" style={{ "max-width": "200px" }} />
                <input type="text" id="phone" className="form-control" placeholder="Your Phone" style={{ "max-width": "160px" }} />
                <input type="text" id="subject" className="form-control" placeholder="Subject" style={{ "max-width": "180px" }} />
                <textarea id="message" className="form-control" rows={1} placeholder="Your Message" style={{ "max-width": "250px" }} defaultValue={""} />
                <button type="button" onclick="sendWhatsApp()" className="btn btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};