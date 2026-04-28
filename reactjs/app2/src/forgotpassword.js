import { useState } from "react";
import { getBaseURL } from "./common";
import { showError, showMessage } from "./message";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ForgotPassword() {
    //declare state variable for input
    let [email, setEmail] = useState('');
    let navigate = useNavigate();

    let recoverAccount = function (e) {
        e.preventDefault();
        //api call
        let apiAddress = getBaseURL() + "forgot_password.php";
        let form = new FormData();
        form.append("email", email);
        let options = {
            url: apiAddress,
            method: 'post',
            responseType: 'json',
            data: form
        };

        axios(options).then((response) => {
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];

                if (success === 'no') {
                    showError(message);
                }
                else {
                    showMessage(message);
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                }
            }
        }).catch((error) => {
            showError();
        });
    }

    return (
        <section className="login-registration-wrapper pt-50">
            <div className="container">
                <ToastContainer />
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="login-registration-style-1 registration text-center mt-50">
                            <h1 className="heading-4 font-weight-500 title">
                                Forgot Password
                            </h1>
                            <div className="login-registration-form pt-10">
                                <form onSubmit={recoverAccount}>
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input type="email" placeholder="user@email.com"
                                                required
                                                value={email} onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <i className="mdi mdi-email" />
                                        </div>
                                    </div>
                                    <div className="single-form">
                                        <button type="submit" className="main-btn primary-btn">Recover Account</button>
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