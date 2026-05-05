import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './dashboard';
import Category from './category';
import ChangePassword from './change_password';
import EditCategory from './edit_category';
import EditProduct from './edit_product';
import InsertCategory from './insert_category';
import InsertProduct from './insert_product';
import Orders from './orders';
import PrintOrder from './print_order';
import Users from './users';
import ViewOrder from './view_order';
import ViewProduct from './view_product';
import Product from './product'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './login';
import ForgotPassword from './forgot_password';
import PageNotFound from './page_not_found';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter() {
    return (<BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} index  />
            <Route path='/dashboard' element={<Dashboard />}  />
            <Route path='/orders' element={<Orders />}  />
            <Route path='/products' element={<Product />}  />
            <Route path='/categories' element={<Category />}  />
            <Route path='/users' element={<Users />}  />
            <Route path='/change-password' element={<ChangePassword />}  />
            
            
            <Route path='/forgot-password' element={<ForgotPassword />}  />
            
            <Route path='/insert-category' element={<InsertCategory />}  />
            <Route path='/edit-category' element={<EditCategory />}  />
            
            <Route path='/edit-product' element={<EditProduct />}  />
            <Route path='/insert-product' element={<InsertProduct />}  />
            <Route path='/view-product' element={<ViewProduct />}  />
            
            <Route path='/print-orders' element={<PrintOrder />}  />
            <Route path='/view-orders' element={<ViewOrder />}  />
            {/* define 404 route which will run when user tries to open non-existing route */}
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>);
}
root.render(<MyRouter />);
