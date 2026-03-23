import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Country from './country';
import styled from 'styled-components'

const Div = styled.div`
background-color: #eee;
height: 100vh;
margin: 0px;
padding: 0px;
display: flex;
justify-content: left;
gap: 10px;
`
function World() {
    return (<Div>

        <Country name='Russia' area='1234' currency='Rubbal' capital='Moscow' gdp='2.1'
            per_person_income='2500 ' />

        <Country name='Canada' area='1500' currency='Candian Dollar' capital='Torrento' gdp='2.2'
            per_person_income='5500 ' />
    </Div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<World />)
