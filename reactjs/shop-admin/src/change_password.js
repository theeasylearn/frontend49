import React from "react";
import Menu from './menu';
export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="wrapper">
            <Menu />
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">
                    <a className="sidebar-toggle js-sidebar-toggle">
                        <i className="hamburger align-self-center" />
                    </a>
                </nav>
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3">Blank Page</h1>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header text-bg-primary">
                                        <h3 className="mb-0 text-white">Change Password</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="currentPassword" className="form-label">Current Password</label>
                                                <input type="password" className="form-control" id="currentPassword" placeholder="Enter current password" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="newPassword" className="form-label">New Password</label>
                                                <input type="password" className="form-control" id="newPassword" placeholder="Enter new password" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                                                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm new password" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Change Password</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        );
    }
}