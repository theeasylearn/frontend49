import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
class BMICalculator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card bmi-card">
                        <div className="card-body p-4">
                            <h3 className="text-center mb-4">BMI Calculator</h3>
                            <form>
                           
                                <div className="mb-3">
                                    <label className="form-label">Height (foot)</label>
                                    <input type="number" className="form-control" placeholder="Enter foot" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Height (remaining inches)</label>
                                    <input type="number" className="form-control" placeholder="Enter inches" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Weight (kg)</label>
                                    <input type="number" className="form-control" placeholder="Enter weight" />
                                </div>
                                <div className="d-grid mb-4">
                                    <button className="btn btn-primary btn-lg">Calculate BMI</button>
                                </div>
                            </form>
                            <div className="result-box">
                                <h5>Your BMI</h5>
                                <h2 className="text-primary">--</h2>
                                <div className="bmi-scale mt-3">
                                    {/* <span className="badge bg-warning text-dark">Underweight</span>
                                    <span className="badge bg-success">Normal</span>
                                    <span className="badge bg-info text-dark">Overweight</span>
                                    <span className="badge bg-danger">Obese</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
root.render(<BMICalculator />);
