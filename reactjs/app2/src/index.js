import SiteFooter from './site_footer';
import ReactDOM from 'react-dom/client';
import Login from './login';
import Register from './register';
import ChangePassword from './changepassword'
import ForgotPassword from './forgotpassword';
import Category from './category';
import Product from './product';
import ProductDetail from './productdetail';
import Cart from './cart';
import Checkout from './checkout';
import Logout from './logout';
import NotFound from './pagenotfound';
import SiteMenu from './menu';
import Home from './sitehome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
function MyRouter() {
    return (
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
            <BrowserRouter>
                <SiteMenu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/changepassword' element={<ChangePassword />} />
                    <Route path='/forgotpassword' element={<ForgotPassword />} />
                    <Route path='/category' element={<Category />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/product/:categoryid' element={<Product />} />
                    <Route path='/productdetail/:productid' element={<ProductDetail />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/logout' element={<Logout />} />

                    <Route path='*' element={<NotFound />} />
                </Routes>
                <SiteFooter />
            </BrowserRouter>
        </CookiesProvider>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);
