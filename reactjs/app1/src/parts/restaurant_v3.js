import React from 'react';
import DinningTable from "./dinning_table_v3";
class Restaurant extends React.Component {
    render() {
        return (<div className="container-fluid">
            <div className="row">
                <DinningTable name='Diya Patel' tableno='29' />
                <DinningTable name='Priyanka desai' tableno='14' />
            </div>
        </div>
        );
    }
}
export default Restaurant;