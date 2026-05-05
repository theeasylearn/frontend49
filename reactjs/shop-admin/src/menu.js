import React from "react";
import { Link } from "react-router-dom";
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <div className="p-3 text-white fw-semibold">
                    Welcome Administrator
                </div>
                <ul className="sidebar-nav">
                    <li className="sidebar-item active">
                        {/* here a tag is relplaced by Link tag and href property is replaced by to */}
                        <Link className="sidebar-link" to="/dashboard">
                            <i class="fa-solid fa-hand-point-right"></i> <span className="align-middle">Dashboard</span>
                        </Link>

                        <Link className="sidebar-link" to="/orders">
                            <i class="fa-solid fa-hand-point-right"></i> <span className="align-middle">Orders</span>
                        </Link>

                        <Link className="sidebar-link" to="/products">
                            <i class="fa-solid fa-hand-point-right"></i> <span className="align-middle">Products</span>
                        </Link>

                        <Link className="sidebar-link" to="/users">
                            <i class="fa-solid fa-hand-point-right"></i> <span className="align-middle">Users</span>
                        </Link>

                        <Link className="sidebar-link" to="/categories">
                            <i class="fa-solid fa-hand-point-right"></i> <span className="align-middle">Categories</span>
                        </Link>

                        <Link className="sidebar-link" to="/change-password">
                            <i class="fa-solid fa-hand-point-right"></i> <span className="align-middle">Change Password</span>
                        </Link>

                        <Link className="sidebar-link" to="/logout">
                            <i class="fa-solid fa-hand-point-right"></i> <span className="align-middle">Logout</span>
                        </Link>

                       
                    </li>
                </ul>
            </div>
        </nav>);
    }
}