import styled, {keyframes} from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const animateButtonBackground = keyframes`
0%{
    background-position: 0 50%;
}
50%{
    background-position: 100% 50%;
}
100%{
    background-position: 0 50%;
}
`;

export const Button = styled(LinkR)`
border-radius: 50px;
background: linear-gradient(-90deg, #f4c4f3, #fc67fa);
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#000' : '#000' )};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px' )};
outline: none;
border: none;
max-width: 200px;
background-size: 400% 400%;
cursor: pointer;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
animation: ${animateButtonBackground} 4s ease-in-out infinite;

&: hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
}

@media screen and (max-width: 480px) {
    margin-left: 1rem;
    width: 180px;
    padding: 10px;
}
`;