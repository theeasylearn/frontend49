import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
class ConditionalRendering extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<nav className="navbar navbar-expand-lg  bg-body-tertiary shadow">
            <div className="container">
                <a className="navbar-brand" href="#">Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="mainMenu">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-pills">
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Trending Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold active text-white" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Change Password</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Forgot Password</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Logout</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Cart</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Checkout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}
root.render(<ConditionalRendering />);
