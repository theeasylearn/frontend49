import './page_not_found.css';
export default function PageNotFound() {
    return (<div className="error-container">
        <div className="container">
            <div className="salon-404">
                <div className="mirror-emoji mb-3">💇‍♀️🪞</div>
                <h1 className="big-404">404</h1>
                <h2 className="display-5 fw-bold mb-3 text-dark">
                    Oops! Your Beauty Glow-Up Got Lost in the Salon! ✨
                </h2>
                <p className="lead mb-4 fs-4 text-muted">
                    Looks like this page went for a <strong>keratin treatment</strong> and never came back...<br />
                    Or maybe it's hiding behind the shampoo station!
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <a href="/" className="btn beauty-btn text-white btn-lg">
                        <i className="fas fa-home me-2" /> Back to the Salon
                    </a>
                    <a href="/services" className="btn btn-outline-dark btn-lg">
                        <i className="fas fa-scissors me-2" /> See Our Services
                    </a>
                </div>
                <div className="mt-5">
                    <p className="text-muted">
                        <i className="fas fa-heart fa-beat me-1" />
                        Pro Tip: Even our best hairstylists sometimes lose a page!
                    </p>
                </div>
                {/* Funny floating elements */}
                <div className="position-absolute top-25 start-10 lost-hair fs-1" style={{ "-webkit-animation-delay": "0s", "animation-delay": "0s" }}>💄</div>
                <div className="position-absolute top-50 end-10 lost-hair fs-1" style={{ "-webkit-animation-delay": "1s", "animation-delay": "1s" }}>💅</div>
                <div className="position-absolute bottom-25 start-25 lost-hair fs-1" style={{ "-webkit-animation-delay": "2s", "animation-delay": "2s" }}>🧴</div>
            </div>
        </div>
    </div>
    );
}