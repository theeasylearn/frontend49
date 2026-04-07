export default function Register() {
    return (
        <section className="login-registration-wrapper pt-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="login-registration-style-1 registration text-center mt-50">
                            <h1 className="heading-4 font-weight-500 title">
                                Register with us
                            </h1>
                            <div className="login-registration-form pt-10">
                                <form action="#">
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input type="email" placeholder="user@email.com" />
                                            <i className="mdi mdi-email" />
                                        </div>
                                    </div>
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input type="number" name="mobile" placeholder="mobile no" />
                                            <i className="mdi mdi-phone" />
                                        </div>
                                    </div>
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input id="password-3" type="password" placeholder="Password" />
                                            <i className="mdi mdi-lock" />
                                            <span toggle="#password-3" className="mdi mdi-eye-outline toggle-password" />
                                        </div>
                                    </div>
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input id="password-3" type="password" placeholder="Confirm Password" />
                                            <i className="mdi mdi-lock" />
                                            <span toggle="#password-3" className="mdi mdi-eye-outline toggle-password" />
                                        </div>
                                    </div>
                                    <div className="single-form">
                                        <button className="main-btn primary-btn">let us create account</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}