export default function Checkout() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 pb-10 pt-10">
                    <div className="card shadow">
                        <div className="card-header">
                            <h2>Checkout</h2>
                        </div>
                        <div className="card-body">
                            <section className="checkout-steps-form-content">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="single-form form-default">
                                            <div className="row">
                                                <div className="col-md-12 form-input form">
                                                    <input type="text" placeholder="Full name" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-form form-default">
                                            <label>Email Address</label>
                                            <div className="form-input form">
                                                <input type="text" placeholder="Email Address" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-form form-default">
                                            <label>Phone Number</label>
                                            <div className="form-input form">
                                                <input type="text" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-form form-default">
                                            <label>Address Line 1</label>
                                            <div className="form-input form">
                                                <input type="text" placeholder="Address Line 1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-form form-default">
                                            <label>Address Line 2</label>
                                            <div className="form-input form">
                                                <input type="text" placeholder="Address Line 2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-form form-default">
                                            <label>City</label>
                                            <div className="form-input form">
                                                <input type="text" placeholder="City" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-form form-default">
                                            <label>Post Code</label>
                                            <div className="form-input form">
                                                <input type="text" placeholder="Post Code" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-20 mb-10">
                                        <label htmlFor>Payment mode</label>
                                        <div className="form-check-inline">
                                            <label htmlFor="cod" className="form-check-label">
                                                <input type="radio" name="paymentmode" defaultValue={1} className="form-check-input" id="cod" />
                                                Cash on Delivery
                                            </label>
                                        </div>
                                        <div className="form-check-inline">
                                            <label htmlFor="online" className="form-check-label">
                                                <input type="radio" name="paymentmode" defaultValue={2} className="form-check-input" id="online" />
                                                Online Payment
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-form">
                                            <button className="vjsteps_nxt main-btn primary-btn">
                                                next step
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}