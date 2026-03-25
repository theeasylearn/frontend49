import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//create functional components 
function Home()
{
    return (<div>
      <h1>Home Page</h1>
    </div>)
}
function Aboutus()
{
    return (<div>
      <h1>About us</h1>
    </div>)
}
function Contactus()
{
    return (<div>
      <h1>Contact us</h1>
    </div>)
}
function Website()
{
   return (<BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} index />
        <Route path='/aboutus' element={<Aboutus />}  />
        <Route path='/contactus' element={<Contactus />}  />
    </Routes>
   </BrowserRouter>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Website />);
