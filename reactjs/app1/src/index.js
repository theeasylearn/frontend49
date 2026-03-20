import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Player.css'
import React from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Player extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {name,match,runs,hundreds,fifties,photos,age} = this.props;
        return (<div className="col">
            <div className="cricketer-card h-100">
                <div className="photo-wrapper">
                    <div className="photo-container">
                        <img src={photos} className="rounded-circle photo" alt="Virat Kohli" />
                    </div>
                </div>
                <div className="name-line">
                   {name}
                </div>
                <div className="info-line">
                    <span className="label">Matches</span>
                    <span className="value">{match}</span>
                </div>
                <div className="info-line">
                    <span className="label">Age</span>
                    <span className="value">{age}</span>
                </div>
                <div className="info-line">
                    <span className="label">Runs</span>
                    <span className="value">{runs}</span>
                </div>
                <div className="info-line">
                    <span className="label">Average</span>
                    <span className="value">{(runs / match).toFixed(2)}</span>
                </div>
                <div className="info-line">
                    <span className="label">100s / 50s</span>
                    <span className="value">{hundreds} / {fifties}</span>
                </div>
            </div>
        </div>)
    }
}
function Team() {
    return (<div className="container">
        <h2 className="mb-5 text-center fw-bold">Cricketers Profile</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {/* Player 1 */}

            <Player name='S. Gill' match='70' runs='3500' hundreds='7' fifties='10' age='26' 
            photos='http://www.picsum.photos/300?random=2' />

            <Player name='K.L Rahul' match='80' runs='4500' hundreds='10' fifties='12' age='33' 
            photos='http://www.picsum.photos/300?random=3' />

            <Player name='R. Pant' match='110' runs='11500' hundreds='17' fifties='25' age='29' 
            photos='http://www.picsum.photos/300?random=3' />
            {/* Add more player cards here following the same pattern */}
        </div>
    </div>
    );
}

root.render(<Team />)
