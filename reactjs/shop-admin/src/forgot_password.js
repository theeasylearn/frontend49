import React from "react";
export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto mt-5">
                        <div className="card shadow">
                            <div className="card-header text-bg-warning">
                                <h1 className="text-white">
                                    Forgot Password? Recover Account
                                </h1>
                            </div>
                            <div className="card-body">
                                <div className="registration text-center mt-50">
                                    <div className="login-registration-form pt-10">
                                        <form action="#">
                                            <div className="single-form form-default form-border text-left mb-3">
                                                <div className="form-input">
                                                    <input type="email"
                                                        className='form-control'
                                                        placeholder="user@email.com" />
                                                    <i className="mdi mdi-email" />
                                                </div>
                                            </div>
                                           
                                            <div className="single-form my-3">
                                                <button className="btn btn-warning w-100">Recover my account</button>
                                            </div>
                                            <a href="" className="btn btn-link">Login</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}