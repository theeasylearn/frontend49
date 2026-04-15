import { useState } from "react";
import { getBaseURL } from "./common";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./message";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function ChangePassword() {
    //create 3 state variable for each input
    let [oldPassword, setOldPassword] = useState('');
    let [newPassword, setNewPassword] = useState('');
    let [confirmNewPassword, setConfirmNewPassword] = useState('');
    let navigate = useNavigate();
    const [cookies] = useCookies(['id']);
    let doChangePassword = function (event) {
        console.log(oldPassword, newPassword, confirmNewPassword);
        //api calling 
        if (newPassword !== confirmNewPassword) {
            showError('new password and confirm new password must be same');
        }
        else {
            let apiAddress = getBaseURL() + "change_password.php";
            let myForm = new FormData();
            myForm.append("id", cookies['id']);
            myForm.append("password", oldPassword);
            myForm.append("newpassword", newPassword);
            let options = {
                url: apiAddress,
                method: 'post',
                responseType: 'json',
                data: myForm
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
                    else {
                        setTimeout(() => {
                            navigate("/logout");
                        }, 2000);
                        showMessage(message);
                    }
                }
            }).catch((error) => {
                showError();
            });
        }

        event.preventDefault();
    }
    return (
        <section className="login-registration-wrapper pt-50">
            <ToastContainer />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="login-registration-style-1 registration text-center mt-50">
                            <h1 className="heading-4 font-weight-500 title">
                                Change Password
                            </h1>
                            <div className="login-registration-form pt-10">
                                <form action="#" onSubmit={doChangePassword}>
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input id="password-3" type="password" placeholder="Old Password" required
                                                value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}
                                            />
                                            <i className="mdi mdi-lock" />
                                            <span toggle="#password-3" className="mdi mdi-eye-outline toggle-password"


                                            />
                                        </div>
                                    </div>
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input id="password-3" type="password" placeholder="New Password" required
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)} />
                                            <i className="mdi mdi-lock" />
                                            <span toggle="#password-3" className="mdi mdi-eye-outline toggle-password" />
                                        </div>
                                    </div>
                                    <div className="single-form form-default form-border text-left">
                                        <div className="form-input">
                                            <input id="password-3" type="password" placeholder="Confirm Password" required
                                                value={confirmNewPassword}
                                                onChange={(e) => setConfirmNewPassword(e.target.value)} />
                                            <i className="mdi mdi-lock" />
                                            <span toggle="#password-3" className="mdi mdi-eye-outline toggle-password" />
                                        </div>
                                    </div>
                                    <div className="single-form">
                                        <button type="submit" className="main-btn primary-btn">Save changes</button>
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