//create functional component 
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { COOKIES_NAME } from './common';
function GuestLink() {
    const [cookies, setCookie, removeCookie] = useCookies([COOKIES_NAME]);

    if (cookies['id'] === undefined) {
        return (<>
            <li><Link to='/register' >Register</Link></li>
            <li><Link to='/login' >Login</Link></li>
            <li><Link to='/forgotpassword' >Forgot Password</Link></li>
        </>);
    }
}
function UserLink() {
    
    if (cookies['id'] !== undefined) {
        return (<>
            <li><Link to='/changepassword' >Change Password</Link></li>
            <li><Link to='/cart' >Cart</Link></li>
            <li><Link to='/checkout' >Checkout</Link></li>
            <li><Link to='/logout' >Logout</Link></li>
        </>)
    }
}
export default function SiteMenu() {
    return (<div className="navigation">
        <header className="menu-style-7 position-relative">
            <div className="navbar-container navbar-sidebar-7">
                <div className="navbar-wrapper">
                    <div className="container-lg">
                        <nav className="main-navbar d-lg-flex justify-content-between align-items-center">
                            <div className="desktop-logo d-lg-block">
                                <a href="#0"><img src="assets/images/logo.svg" alt="Logo" /></a>
                            </div>
                            <div className="navbar-menu-toggle d-lg-block">
                                <button id="toggle-menu-6" className="menu-toggle">
                                    <span className="toggle-icon" />
                                    <span className="toggle-icon" />
                                    <span className="toggle-icon" />
                                </button>
                            </div>
                            <div className="navbar-menu">
                                <ul className="main-menu">
                                    <div className="navbar-close d-lg-none text-right mb-3">
                                        <a href="#0" id="menu-close">
                                            <i className="mdi mdi-close" />
                                        </a>
                                    </div>
                                    <li><Link to='/' >Home</Link></li>
                                    <li><Link to='/category' >Shop</Link></li>
                                    <GuestLink />
                                    <UserLink />
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="overlay-7" />
        </header>
    </div>);
}