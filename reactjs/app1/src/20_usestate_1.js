import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function Register() {
    //create state variable using useState Hook
    let [firstname, setFirstname] = useState("");
    let [lastname, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmpassword, setConfirmPassword] = useState();
    // bind state variable & function with each and every input

    let doRegister = (event) => {
        event.preventDefault();
        console.log(firstname, lastname, email, password, confirmpassword);
    }

    return (<div className="bg-light d-flex align-items-center justify-content-center min-vh-100 py-4">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-5">
                    {/* Card */}
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4 p-md-5">
                            {/* Title with decorative lines */}
                            <div className="d-flex align-items-center mb-3">
                                <hr className="flex-grow-1 border-secondary" />
                                <h1 className="mx-4 mb-0 fw-bold text-dark">Register</h1>
                                <hr className="flex-grow-1 border-secondary" />
                            </div>
                            {/* Subtitle */}
                            <p className="text-center text-muted mb-4">
                                Create your account. It's free and only takes a minute.
                            </p>
                            {/* Form */}
                            <form onSubmit={doRegister}>
                                {/* First & Last Name */}
                                <div className="row g-3 mb-3">
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" placeholder="First Name" required
                                            value={firstname}
                                            onChange={(e) => setFirstname(e.target.value)} />
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" placeholder="Last Name" required
                                            value={lastname} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Email" required
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                {/* Password */}
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Password" required
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {/* Confirm Password */}
                                <div className="mb-4">
                                    <input type="password" className="form-control" placeholder="Confirm Password" required
                                        value={confirmpassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>

                                {/* Register Button */}
                                <button type="submit" className="btn btn-success btn-lg w-100 fw-semibold">
                                    Register Now
                                </button>
                                <h3>
                                    {firstname} <br/> {lastname} <br/> {email}  <br/> {password}
                                </h3>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Register />);
