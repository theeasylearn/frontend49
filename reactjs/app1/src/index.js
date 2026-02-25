import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
//create class 
class Restaurant extends React.Component {
    render() {
        return (<div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 mb-2">
                    <div className="card shadow">
                        <div className="card-header d-flex justify-content-between text-bg-primary">
                            <div className="fw-bold">Ram Patel</div>
                            <span className="fs-6 badge text-bg-light">1</span>
                        </div>
                        <div className="card-body">
                            <button type="button" className="btn btn-primary w-100">Thalli - 0</button>
                            <table className="table" width="100%">
                                <tbody><tr>
                                    <td width="50%">
                                        <button type="button" className="btn btn-secondary shadow w-100">Roti
                                            <span className="badge text-bg-light">1</span>
                                        </button>
                                    </td>
                                    <td width="50%">
                                        <button type="button" className="btn btn-success shadow w-100">Chas
                                            <span className="badge text-bg-light">1</span>
                                        </button>
                                    </td>
                                </tr>
                                    <tr>
                                        <td width="50%">
                                            <button type="button" className="btn btn-danger shadow w-100">Papad
                                                <span className="badge text-bg-light">1</span>
                                            </button>
                                        </td>
                                        <td width="50%">
                                            <button type="button" className="btn btn-warning shadow w-100">Sweet
                                                <span className="badge text-bg-dark">1</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody></table>
                        </div>
                        <div className="card-footer bg-light d-flex justify-content-end">
                            Total Amount : <span className="fw-bold">1234</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
root.render(<Restaurant />);
