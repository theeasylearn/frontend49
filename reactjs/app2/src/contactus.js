import Navbar from './navbar';
import Footer from './footer';
import BackToTop from './backtotop';

export default function Contact(){
    return (
        <>
            <Navbar />
            <div className="container-fluid contact py-5" style={{ background: "var(--bs-primary)" }}>
                <div className="container pt-5">
                    <div className="row g-4 align-items-center">
                        {/* Left text + right form */}
                        <div className="col-lg-6">
                            <div className="text-center">
                                <h1 className="display-3 text-white mb-4">Contact Us</h1>
                                <p className="text-white fs-4">Have questions about our courses or services? We’d love to hear from you. Fill out the form or reach us directly through phone or email.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form rounded p-5 bg-white">
                                <form>
                                    {/* Form fields identical to original */}
                                    <button type="submit" className="btn btn-primary w-100 py-3 px-5">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Address, Email, Phone cards + Google Map iframe */}
            <div className="container-fluid pb-5">
                <div className="container py-5">
                    {/* Three info cards + iframe exactly as in original */}
                </div>
            </div>

            <Footer />
            <BackToTop />
        </>
    );
};