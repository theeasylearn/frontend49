import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
function DisplayState(props)
{
    var states = props.states;
    var name = props.name;
    var code = props.code;
    var listitems = states.map((item,index) => {
        console.log(item,index);
        return <li key={index} className='list-group-item'>{item}</li>
    });
    console.log(listitems);
    return (<div className='container'>
        <div className='row mt-5'>
            <div className='col-12'>
                Name = {name} ({code}) States
            </div>
            <div className='col-lg-3'>
                <ul className='list-group'>
                    {listitems}
                </ul>
            </div>
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
let list = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"];
root.render(<DisplayState states={list} name='India' code='+91' />);
