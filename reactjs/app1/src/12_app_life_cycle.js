import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create class 
class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor called....');
        this.count = 0; //instance variable 
        this.state = {
            number: 0
        }
    }

    componentWillMount() {
        console.log('componentWillMount is called...');
    }

    componentDidMount() {
        console.log('componentDidMount is called...');
    }

    //arrow function because we update state variable
    generateNumber = () => {
        //here random local variable
        let random = parseInt(Math.random() * 99);
        this.setState({ number: random }); //update number variable with random 
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate is called...');
        console.log(this.count);
        if(this.count>3)
            return false; 
        else 
            return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate is called...');

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate is called...');
        
    }
    componentWillUnmount()
    {
        console.log('componentWillUnmount is called...');
    }
    render() {
        this.count++; //increment by 1
        console.log('render method is called count = ', this.count);
        return (<div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>App life cycle</h1>
                    <hr />
                    <h3>Random Number : - <b>{this.state.number}</b></h3>
                    <button type='button'
                        onClick={this.generateNumber}
                        className='btn btn-danger'>Generate Random Number </button>
                </div>
            </div>
        </div>)
    }
}
root.render(<LifeCycle />);
