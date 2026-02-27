import React from 'react';
class DinningTable extends React.Component {
    //use constructor 
    constructor(props)
    {
        super(props);
        //instance variable 
        this.name = props.name;
        this.tableno = props.tableno;
        //create state variable
        this.state = {
            thali:0,
            roti:0,
            papad:0,
            chas:0,
            sweet:0,
            total:0
        }
    }
    render() {
        return (<div className="col-lg-3 mb-3">
            <div className="card shadow">
                <div className="card-header d-flex justify-content-between text-bg-primary">
                    <div className="fw-bold">{this.name}</div>
                    <span className="fs-6 badge text-bg-light">{this.tableno}</span>
                </div>
                <div className="card-body">
                    <button type="button" className="btn btn-primary w-100">Thalli - {this.state.thali}</button>
                    <table className="table" width="100%">
                        <tbody><tr>
                            <td width="50%">
                                <button type="button" className="btn btn-secondary shadow w-100">Roti
                                    <span className="badge text-bg-light">{this.state.roti}</span>
                                </button>
                            </td>
                            <td width="50%">
                                <button type="button" className="btn btn-success shadow w-100">Chas
                                    <span className="badge text-bg-light">{this.state.chas}</span>
                                </button>
                            </td>
                        </tr>
                            <tr>
                                <td width="50%">
                                    <button type="button" className="btn btn-danger shadow w-100">Papad
                                        <span className="badge text-bg-light">{this.state.papad}</span>
                                    </button>
                                </td>
                                <td width="50%">
                                    <button type="button" className="btn btn-warning shadow w-100">Sweet
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