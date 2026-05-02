import React from "react";

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
                        <a className="sidebar-link" href="#">
                            <i className="align-middle" data-feather="list" /> <span className="align-middle">Sample
                                Link</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>);
    }
}