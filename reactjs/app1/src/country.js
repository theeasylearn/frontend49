import styled from 'styled-components'
const Ul = styled.ul` 
width: 400px;
height: 300px;
background: #ffffff;
padding: 20px;
list-style: none;
border-radius: 10px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;
const Li = styled.li`
display: flex;
justify-content: space-between;
padding: 10px 0;
border-bottom: 1px solid #eee;
`;
const Strong = styled.strong`
color: #555;
`;
const Span = styled.span`
color: #222;
`;

export default function Country(props) {
    var { name, currency, area, capital, gdp, per_person_income } = props
    return (<Ul>
        <Li><Strong>Name:</Strong> <Span>{name}</Span></Li>
        <Li><Strong>Currency:</Strong> <Span>{currency}</Span></Li>
        <Li><Strong>Area:</Strong> <Span>{area} million km²</Span></Li>
        <Li><Strong>Capital:</Strong> <Span>{capital}</Span></Li>
        <Li><Strong>GDP:</Strong> <Span>$ {gdp} Trillion</Span></Li>
        <Li><Strong>Per Person Income:</Strong> <Span>${per_person_income}</Span></Li>
    </Ul>)
}
