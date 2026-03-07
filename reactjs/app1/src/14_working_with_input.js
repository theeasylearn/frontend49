import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create class 
class SimpleInterestCalculator extends React.Component {
    constructor(props) {
        super(props);
        //create state object with as must key value pair as no of inputs 
        this.state =
        {
            amount: '',
            rate: '',
            year: '',
            interest: ''
            //this variable will be used to store result (interest)

        }
    }
    //create arrow function (that will update state variable) for each and every input 
    updateAmount = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    updateRate = (event) => {
        this.setState({
            rate: event.target.value
        })
    }

    updateYear = (event) => {
        this.setState({
            year: event.target.value
        })
    }
    
    calculateInterest = (event) => {
        event.preventDefault(); //required to prevent reloading of the webpage
        console.log(this.state); //whole state object
        this.setState({
            interest: (this.state.amount * this.state.rate * this.state.year ) / 100
        });
    }
    render() {
        return (<div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header text-center bg-primary text-white">
                            <h4>Simple Interest Calculator</h4>
                        </div>
                        <div className="card-body">
                            <form method="post" onSubmit={this.calculateInterest}>
                                <div className="mb-3">
                                    <label className="form-label">Principal Amount</label>
                                    <input type="number" name="principal" className="form-control" required onBlur={this.updateAmount} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Rate of Interest (%)</label>
                                    <input type="number" name="rate" step="0.01" className="form-control" required
                                        onBlur={this.updateRate} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Time (Years)</label>
                                    <input type="number" name="time" step="0.01" className="form-control" required
                                        onBlur={this.updateYear} />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Calculate</button>
                                </div>
                                <h3>Simple interest is {this.state.interest}</h3>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
root.render(<SimpleInterestCalculator />);
