import React from "react";
import Menu from './menu';
export default class PageNotFound extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-12 mt-5">
                    <h1 className="text-center">Page does not exists</h1>
                </div>
            </div>
        </div>);
    }
}