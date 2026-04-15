import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { COOKIES_NAME } from "./common";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showMessage } from "./message";
export default function Logout() {
    var navigate = useNavigate('');
    const [cookies, setCookie, removeCookie] = useCookies(COOKIES_NAME);
    //DELETE COOKIE
    removeCookie('id');
    useEffect(() => {
        showMessage('logout successful');
        setTimeout(() => {
            navigate('/');
        }, 2000);
    });
    return (<>
        <div className="container">
            <ToastContainer />
        </div>
    </>)
}