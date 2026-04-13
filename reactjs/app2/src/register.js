import { useState } from "react";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import { getBaseImageURL, getBaseURL } from "./common";
import { useNavigate } from "react-router-dom";
export default function Register() {
    //create state variable for each and every input

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [mobile, setMobile] = useState('');
    let navigate = useNavigate(); //create navigate function/object
    //create function
    let doRegister = function (e) {
        e.preventDefault();
        console.log(email, password, confirmPassword, mobile);
        if (password !== confirmPassword) {
            alert('password and confirm password do not match');
        }
        else {
            //api call 
            let apiAddress = getBaseURL() + "register.php";
            let form = new FormData();
            form.append("email", email);
            form.append("password", password);
            form.append("mobile", mobile);

            let options = {
                url: apiAddress,
                method: 'post',
                responseType: 'json',
                data: form
            };
            axios(options).then((response) => {
                console.log(response.data);
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
                    else 
                    {
                        showMessage(message);
                        //run code after 2 seconds so user can read message
                        setTimeout(() =>{
                            navigate("/login");
                        },2000)
                    }
                }
            }).catch((error) => showError());
        }
    };
    return (
        <section className="login-registration-wrapper pt-50">
            <div className="container">
                <ToastContainer />
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="login-registration-style-1 registration text-center mt-50">
                            <h1 className="heading-4 font-weight-500 title">
                                Register with us
                            </h1>
                            <div className="login-registration-form pt-10">
                                <form action="#" onSubmit={doRegister}>
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input type="email" placeholder="user@email.com" required
                                                value={email} onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <i className="mdi mdi-email" />
                                        </div>
                                    </div>
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input type="number" name="mobile" placeholder="mobile no"
                                                value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                                            <i className="mdi mdi-phone" />
                                        </div>
                                    </div>
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input id="password-3" type="password" placeholder="Password"
                                                value={password} required
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <i className="mdi mdi-lock" />
                                            <span toggle="#password-3" className="mdi mdi-eye-outline toggle-password" />
                                        </div>
                                    </div>
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input id="password-3" type="password" placeholder="Confirm Password" required
                                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                            <i className="mdi mdi-lock" />
                                            <span toggle="#password-3" className="mdi mdi-eye-outline toggle-password" />
                                        </div>
                                    </div>
                                    <div className="single-form">
                                        <button type="submit" className="main-btn primary-btn">let us create account</button>
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