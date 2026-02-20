import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //here ./ is used because index.css file is in src folder
//create virtual DOM 
const root = ReactDOM.createRoot(document.getElementById('root'));
//create variable 
var num1 = 100;
var num2 = 9;
var output = (<div>
    <h1>Expression in react</h1>
    <hr/>
    <b>num1 = {num1} num2 = {num2}</b>
    <ol>
        <li>Addition = {num1 + num2}</li>
        <li>Subtraction {num1 - num2}</li>
        <li>Multiplication {num1 * num2}</li>
        <li>Division {num1 / num2}</li>
    </ol>
</div>)
root.render(output)
