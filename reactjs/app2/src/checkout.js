import { useState } from 'react';
import { showError, showMessage } from './message';
import { ToastContainer } from 'react-toastify';
import { getBaseURL } from './common';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Checkout() {
    //create state variable for each and every input field of checkout form
    const [fullName, setFullName] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [remarks, setRemarks] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    // bind state variable with input field using onChange event
    let [cookies] = useCookies(['id']);
    let navigate = useNavigate();   
    function doCheckout(e) {
        e.preventDefault();
        //replace alert with console.log for testing purpose    
        console.log(fullName, addressLine1, addressLine2, city, pinCode, remarks, mobileNumber);
        //call api using post method use below detail
        const apiAddress = getBaseURL() + "checkout.php";
        const formData = new FormData();
        formData.append('fullname', fullName);
        formData.append('address1', addressLine1);
        formData.append('address2', addressLine2);
        formData.append('city', city);  
        formData.append('pincode', pinCode);
        formData.append('remarks', remarks);
        formData.append('mobile', mobileNumber);
        formData.append('usersid', cookies['id']);

        const options = {
            url: apiAddress,
            method: 'post',
            data: formData,
            responseType: 'json'
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
                    showMessage(message);
                    setTimeout(() => {
                        navigate('/'); //navigate to home page after successful checkout
                    }, 2000);
                }
            }}).catch((error) => {
                showError();
            });   
        
    }
    return (
        <div className="container">
            <ToastContainer />
            <div className="row">
                <div className="col-12 pb-10 pt-10">
                    <div className="card shadow">
                        <div className="card-header">
                            <h2>Checkout</h2>
                        </div>
                        <div className="card-body">
                            <form action="" onSubmit={doCheckout}>
                                <section className="checkout-steps-form-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-form form-default">
                                                <div className="row">
                                                    <div className="col-md-12 form-input form">
                                                        <input type="text" placeholder="Full name"
                                                            value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* add textbox for mobile */}
                                        <div className="col-md-6">
                                            <div className="single-form form-default">
                                                <div className="row">
                                                    <div className="col-md-12 form-input form">
                                                        <input type="number" placeholder="Mobile Number"
                                                        value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-form form-default">
                                                <label>Address Line 1</label>
                                                <div className="form-input form">
                                                    <input type="text" placeholder="Address Line 1"
                                                        value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-form form-default">
                                                <label>Address Line 2</label>
                                                <div className="form-input form">
                                                    <input type="text" placeholder="Address Line 2"
                                                        value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-form form-default">
                                                <label>City</label>
                                                <div className="form-input form">
                                                    <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-form form-default">
                                                <label>PinCode</label>
                                                <div className="form-input form">
                                                    <input type="text" placeholder="Post Code" value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 mt-20 mb-10">
                                            <label htmlFor="remarks">Remarks</label>
                                            <div className="form-input form">
                                                <textarea id="remarks" placeholder="Enter your remarks here" className='form-control' value={remarks} onChange={(e) => setRemarks(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-20 mb-10">
                                            <label htmlFor>Payment mode</label>
                                            <div className="form-check">
                                                <label htmlFor="cod" className="form-check-label">
                                                    <input type="radio" name="paymentmode" defaultValue={1} className="form-check-input" id="cod" checked readOnly />
                                                    Cash on Delivery
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label htmlFor="online" className="form-check-label">
                                                    <input type="radio" name="paymentmode" defaultValue={2} className="form-check-input" id="online" readOnly />
                                                    Online Payment
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-form">
                                                <button type="submit" className="vjsteps_nxt main-btn primary-btn">
                                                    Confirm my order
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}