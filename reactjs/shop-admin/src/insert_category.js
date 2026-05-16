import React from "react";
import Menu from './menu';

export default class InsertCategory extends React.Component {
    constructor(props) {
        super(props);
        //create state variable for each and every input 
        this.state = {};
    }
    updateValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render() {
        return (<div className="wrapper">
            <Menu />
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">
                    <a className="sidebar-toggle js-sidebar-toggle"><i className="hamburger align-self-center" /></a>
                </nav>
                <main className="content">

                    <div className="container-fluid p-0">
                        <div className="card">
                            <div className="card-header text-bg-primary"><h3 className="mb-0 text-white">Insert new category</h3></div>
                            <div className="card-body">
                                <form id="categoryForm">
                                    <div className="mb-3"><label className="form-label">Title</label>

                                        <input type="text" className="form-control" name="title" placeholder="Category title" required
                                            value={this.state.title}
                                            onChange={(e) => this.updateValue(e)} />
                                    </div>
                                    <div className="mb-3"><label className="form-label">Photo</label>
                                        <input type="file" className="form-control" name="photo" required /></div>
                                    <div className="mb-3"><label className="form-label">Is Live</label>
                                        <select className="form-select" name="islive" required
                                        value={this.state.islive} 
                                        onChange={(e) => updateValue(e)}
                                        >
                                            <option value="1">1 - Live</option>
                                            <option value="0">0 - Hidden</option>
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
