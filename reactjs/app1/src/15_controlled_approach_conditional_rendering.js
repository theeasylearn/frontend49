import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
class BMICalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bmi: 0,
            fontColor: 'text-dark'
        };
    }
    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onSubmitForm = (event) => {
        //this is required
        event.preventDefault();
        console.log(this.state);
        //step1 
        // 1) calculate total inches of given foot and inches 
        let totalInches = (this.state.foot * 12) + parseInt(this.state.inch);
        // 2) convert cm 
        var meter = totalInches * 0.0254;
        // 4) divide weight by square of meter (that is your bmi)
        this.setState({
            bmi: this.state.weight / (meter * meter)
        }, () => {
            let color = 'text-dark';
            if (this.state.bmi > 30)
                color = 'text-danger'
            else if (this.state.bmi > 25)
                color = 'text-warning'
            else if (this.state.bmi > 18.5)
                color = 'text-success'
            else
                color = 'text-info'
            this.setState({
                fontColor: color
            });
        });


    }
    render() {
        return (<div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card bmi-card">
                        <div className="card-body p-4">
                            <h3 className="text-center mb-4">BMI Calculator</h3>
                            <form onSubmit={this.onSubmitForm} method='post'>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Height (foot)</label>
                                            <input name='foot' type="number" className="form-control" placeholder="Enter foot"
                                                value={this.state.foot}
                                                onChange={this.onInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Height (remaining inches)</label>
                                            <input name='inch' type="number" className="form-control" placeholder="Enter inches"
                                                value={this.state.inch}
                                                onChange={this.onInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="mb-3">
                                    <label className="form-label">Weight (kg)</label>
                                    <input name='weight' type="number" className="form-control" placeholder="Enter weight"
                                        value={this.state.weight}
                                        onChange={this.onInputChange}
                                    />
                                </div>
                                <div className="d-grid mb-4">
                                    <button type='submit' className="btn btn-primary btn-lg">Calculate BMI</button>
                                </div>
                            </form>
                            <div className="result-box">
                                <h5 className={this.state.fontColor}>Your BMI :- {this.state.bmi}</h5>
                                <h2 className="text-primary">--</h2>
                                <div className="bmi-scale mt-3">
                                    {(this.state.bmi > 30.0 && <span className="p-2 badge bg-danger">Obese</span>)}
                                    {(this.state.bmi >= 18.2 && this.state.bmi <= 24.9 && <span className="p-2 badge bg-success">Normal</span>)}
                                    {(this.state.bmi >= 25.0 && this.state.bmi <= 29.9 && <span className="p-2 badge bg-info text-dark">Overweight</span>
                                    )}
                                    {(this.state.bmi < 18.5) && <span className="p-2 badge bg-warning text-dark">Underweight</span>}
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
