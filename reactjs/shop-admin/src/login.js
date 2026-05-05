import React from "react";
import { Link } from "react-router-dom";
export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto mt-5">
                        <div className="card shadow">
                            <div className="card-header text-bg-primary">
                                <h1 className="text-white">
                                    Login
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
                                            <div className="single-form form-default form-border text-left mb-3">
                                                <div className="form-input">
                                                    <input id="password-3" type="password" placeholder="Password" className='form-control' />
                                                    <i className="mdi mdi-lock" />
                                                    <span toggle="#password-3" className="mdi mdi-eye-outline toggle-password" />
                                                </div>
                                            </div>
                                            <div className="single-form">
                                                <button className="btn btn-primary w-100">Sign in</button>
                                            </div>
                                            <Link to="/forgot-password" className="btn btn-link">Forgot password? click here</Link>
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