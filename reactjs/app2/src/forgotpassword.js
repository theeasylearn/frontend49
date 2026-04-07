export default function ForgotPassword() {
    return (
        <section className="login-registration-wrapper pt-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="login-registration-style-1 registration text-center mt-50">
                            <h1 className="heading-4 font-weight-500 title">
                                Forgot Password
                            </h1>
                            <div className="login-registration-form pt-10">
                                <form action="#">
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input type="email" placeholder="user@email.com" />
                                            <i className="mdi mdi-email" />
                                        </div>
                                    </div>
                                    <div className="single-form">
                                        <button className="main-btn primary-btn">Recover Account</button>
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