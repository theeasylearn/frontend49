import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './match.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create function 
function Match(data) {
    return (<div className="container hero-section">
        <div className="match-card mx-auto col-lg-8">

            <h5 className="text-uppercase text-warning mb-3">Super 8 - Group 1</h5>

            <div className="row align-items-center mb-4">
                <div className="col-md-5 team-name">{data.team1}</div>
                <div className="col-md-2 vs-text">VS</div>
                <div className="col-md-5 team-name">{data.team2}</div>
            </div>

            <hr className="border-light" />

                <div className="row text-start mt-4">
                    <div className="col-md-6 mb-3">
                        <p><span className="detail-label">Match:</span><br/>{data.team1} vs {data.team2}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <p><span className="detail-label">Date:</span><br/>{data.datetime}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <p><span className="detail-label">Time:</span><br/>{data.time}</p>
                        <small className="text-light">(Toss at {data.toss})</small>
                    </div>
                    <div className="col-md-6 mb-3">
                        <p><span className="detail-label">Venue:</span><br/>{data.venue}</p>
                    </div>
                </div>

                <div className="mt-4">
                    <button className="btn btn-warning btn-lg px-5">Set Reminder</button>
                </div>

                <div className="footer-text">
                    Get ready for a thrilling battle between two cricket giants under the lights in Ahmedabad.
                </div>

        </div>
    </div>)
}
let data = {
    team1:'England',
    team2:'Newzland',
    venue:'Vankhede Stadium, Mumbai',
    datetime:'25-02-2026',
    toss:'06:45 PM',
    time: '07:15 PM'
} ; //object
root.render(Match(data))
