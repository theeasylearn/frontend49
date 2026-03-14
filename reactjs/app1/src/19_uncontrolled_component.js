import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
class Login extends Component {

    constructor(props) {
        super(props);
        //create property variable for each and every input 
        this.email = React.createRef();
        this.password = React.createRef();
        //create state variable
        this.state = {
            message: '',
            color: ''
        };
    }

    checkLogin = (event) => {
        event.preventDefault();
        console.log(this.email.current.value);
        console.log(this.password.current.value);
        //check is email is admin@gmail.com and password is 123123
        if (this.email.current.value === 'admin@gmail.com' && this.password.current.value === '123123') {
            this.setState({
                message: "Login successful",
                color: "text-primary fw-bold"
            });
        }
        else {
            this.setState({
                message: "Invalid login attempt",
                color: "text-danger fw-bold"
            });
        }
        this.setState({});//empty state update
    }
    render() {
        return (<div className="container">
            <div className="row vh-100 align-items-center">
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h3 className="text-center mb-4">Login</h3>
                            <form method='post' onSubmit={this.checkLogin}>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="email" placeholder="Email" ref={this.email} />
                                    <label htmlFor="email">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="password" placeholder="Password" ref={this.password} />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="d-grid mb-3">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <h3 className={this.state.color}>{this.state.message}</h3>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);
