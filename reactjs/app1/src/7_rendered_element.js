import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './clock.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//functional component 
function DigitalClock(datetime) {
    //object destructing 
    let { day, month, year, hour, minute, seconds } = datetime;
    let ampm = null;
    if (hour > 12) {
        hour = hour - 12;
        ampm = "PM";
    }
    else {
        ampm = "AM";
    }
    return (
        <>
            <div className="matrix-bg"></div>
            <div className="container-fluid clock-container d-flex justify-content-center align-items-center">
                <div className="text-center glow-box">
                    <div id="clock" className="clock">{hour}:{minute}:{seconds} {ampm}</div>
                    <div id="date" className="date mt-3">{day}-{month}-{year} </div>
                </div>
            </div>
        </>
    )
}
function updateDateTime()
{
    let d = new Date(); //create object of date class 
    let datetime = {
        day: d.getDate(),
        month: d.getMonth() + 1,
        year: d.getFullYear(),
        hour: d.getHours(),
        minute: d.getMinutes(),
        seconds: d.getSeconds()
    }
    root.render(DigitalClock(datetime));
}
// updateDateTime(); //we must this function at every second
setInterval(updateDateTime,1000);
