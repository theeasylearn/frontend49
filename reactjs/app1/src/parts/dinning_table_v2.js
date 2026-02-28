import React from 'react';
const THALI_PRICE = 100;
const ROTI_PRICE = 11.25;
const CHAS_PRICE = 9.37;
const PAPAD_PRICE = 7.99;
const SWEET_PRICE = 21.11;
class DinningTable extends React.Component {
    //use constructor 

    constructor(props) {
        super(props);
        //instance variable 
        this.name = props.name;
        this.tableno = props.tableno;


        //create state variable
        this.state = {
            thali: 0,
            roti: 0,
            papad: 0,
            chas: 0,
            sweet: 0,
            total: 0
        }
    }
    updateTotal = () => {
        //only after thali is updated 
        this.setState({
            total: ((this.state.thali * THALI_PRICE) +
                (this.state.roti * ROTI_PRICE) +
                (this.state.papad * PAPAD_PRICE) +
                (this.state.chas * CHAS_PRICE) +
                (this.state.sweet * SWEET_PRICE)).toFixed(2)
        });
    }
    //arrow function (because we are going to update state variable in it)
    updateThali = () => {
        // alert('hi');
        this.setState({
            thali: this.state.thali + 1,
        }, () => this.updateTotal());
    }

    updateRoti = () => {
        this.setState({
            roti: this.state.roti + 1
        }, () => this.updateTotal());
    }

    updateChas = () => {
        this.setState({
            chas: this.state.chas + 1
        }, () => this.updateTotal());
    }
    updatePapad = () => {
        this.setState({
            papad: this.state.papad + 1
        }, () => this.updateTotal());
    }
    updatesweet = () => {
        this.setState({
            sweet: this.state.sweet + 1
        }, () => this.updateTotal())
    }
    render() {
        return (<div className="col-lg-3 mb-3" >
            <div className="card shadow">
                <div className="card-header d-flex justify-content-between text-bg-primary">
                    <div className="fw-bold">{this.name}</div>
                    <span className="fs-6 badge text-bg-light">{this.tableno}</span>
                </div>
                <div className="card-body">
                    <button onClick={this.updateThali} type="button" className="btn btn-primary w-100">Thalli - {this.state.thali}</button>
                    <table className="table" width="100%">
                        <tbody><tr>
                            <td width="50%">
                                <button onClick={this.updateRoti} type="button" className="btn btn-secondary shadow w-100">Roti
                                    <span className="badge text-bg-light">{this.state.roti}</span>
                                </button>
                            </td>
                            <td width="50%">
                                <button onClick={this.updateChas} type="button" className="btn btn-success shadow w-100">Chas
                                    <span className="badge text-bg-light">{this.state.chas}</span>
                                </button>
                            </td>
                        </tr>
                            <tr>
                                <td width="50%">
                                    <button onClick={this.updatePapad} type="button" className="btn btn-danger shadow w-100">Papad
                                        <span className="badge text-bg-light">{this.state.papad}</span>
                                    </button>
                                </td>
                                <td width="50%">
                                    <button onClick={this.updatesweet} type="button" className="btn btn-warning shadow w-100">Sweet
                                        <span className="badge text-bg-dark">{this.state.sweet}</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody></table>
                </div>
                <div className="card-footer bg-light d-flex justify-content-end">
                    Total Amount : <span className="fw-bold">{this.state.total}</span>
                </div>
            </div>
        </div>);
    }
}
export default DinningTable;