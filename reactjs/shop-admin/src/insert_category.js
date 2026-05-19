import React from "react";
import Menu from './menu';
import usingHooks from "./wrapper_functions";
import { getBaseURL } from "./common";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./message";

class InsertCategory extends React.Component {
    constructor(props) {
        super(props);
        //create state variable for each and every input 
        this.state = {};
    }

    updateValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    setPhoto = (e) => {
        this.setState({
            [e.target.name]: e.target.files[0]
        });
    }
    saveCategory = (e) => {
        console.log(this.state);
        e.preventDefault();
        var apiAddress = getBaseURL() + "insert_category.php";
        //we need to pass title,isLive and photo to api when we call it, to do so we have to create formData class object
        let form = new FormData();
        form.append("title", this.state.title);
        form.append("photo", this.state.photo);
        form.append('islive', this.state.islive);
        var options = {
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data: form
        };
        axios(options).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success === 'yes') {
                    showMessage(message);
                    setTimeout(() => {
                        this.props.navigate('/categories');
                    }, 2000);
                }
                else {
                    showError(message);
                }
            }
        }).catch((error) => {
            showError();
        });
    }
    render() {
        return (<div className="wrapper">
            <Menu />
            <ToastContainer />
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">
                    <a className="sidebar-toggle js-sidebar-toggle"><i className="hamburger align-self-center" /></a>
                </nav>
                <main className="content">

                    <div className="container-fluid p-0">
                        <div className="card">
                            <div className="card-header text-bg-primary"><h3 className="mb-0 text-white">Insert new category</h3></div>
                            <div className="card-body">
                                <form id="categoryForm" onSubmit={this.saveCategory}>
                                    <div className="mb-3"><label className="form-label">Title</label>

                                        <input type="text" className="form-control" name="title" placeholder="Category title" required
                                            value={this.state.title}
                                            onChange={(e) => this.updateValue(e)} />
                                    </div>
                                    <div className="mb-3"><label className="form-label">Photo</label>
                                        <input type="file" className="form-control" name="photo" required
                                            onChange={(e) => this.setPhoto(e)} />
                                    </div>
                                    <div className="mb-3"><label className="form-label">Is Live</label>
                                        <select className="form-select" name="islive" required
                                            value={this.state.islive}
                                            onChange={(e) => this.updateValue(e)}
                                        >
                                            <option value="">Select Status</option>
                                            <option value="1">1 - Live</option>
                                            <option value="0">0 - Not Live</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                    <a href="category.html" className="btn btn-secondary">Cancel</a>
                                </form>
                                <div id="message" className="mt-3 small"></div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>)
    }
}
export default usingHooks(InsertCategory)