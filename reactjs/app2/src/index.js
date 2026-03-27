import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './contactus';
import Courses from './courses';
import AboutUs from './about';
import Products from './products';
import Services from './services';
import Testimonials from './testimonials'
import Gallery from './gallery'
import Home from './home'
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRoute()
{
    return (<BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} index />
            <Route path='/contactus' element={<Contact />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/products' element={<Products />} />
            <Route path='/services' element={<Services />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/gallery' element={<Gallery />} />
        </Routes>
    </BrowserRouter>)
}
root.render(<MyRoute />);
