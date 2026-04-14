import { useState } from "react";
import { getBaseURL, COOKIES_NAME } from "./common";
import { showError, showMessage } from "./message";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
export default function Login() {
    //create cookies 
    const [cookies, setCookie, removeCookie] = useCookies([COOKIES_NAME]);
    //declare state variable for each input
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate();
    let doLogin = function (e) {

        e.preventDefault();
        console.log(email, password);
        //api call
        let apiAddress = getBaseURL() + "login.php";
        let form = new FormData();
        form.append("email",email);
        form.append("password",password);
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
            else 
            {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];

                if(success === 'no')
                {
                    showError(message);
                }
                else 
                {
                    showMessage(message);
                    //create cookies
                    setCookie('id',response.data[3]['id']);
                    //check cookies has been created or not
                    //console.log(cookies['id']);
                    //run after 2 second pause
                    setTimeout(() => {
                         navigate('/');
                    },2000);
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
                                Login
                            </h1>
                            <div className="login-registration-form pt-10">
                                <form onSubmit={doLogin}>
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input type="email" placeholder="user@email.com"
                                                required
                                                value={email} onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <i className="mdi mdi-email" />
                                        </div>
                                    </div>
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input id="password-3" type="password" placeholder="Password" required
                                                value={password} onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <i className="mdi mdi-lock" />
                                            <span toggle="#password-3" className="mdi mdi-eye-outline toggle-password" />
                                        </div>
                                    </div>
                                    <div className="single-form">
                                        <button type="submit" className="main-btn primary-btn">Sign in</button>
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