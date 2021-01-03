import styled, {keyframes} from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const ButtonOpacityAnimate = keyframes`
0% {
    opacity: 0;
}
12.5% {
    opacity: 0.12;
}
25% {
    opacity: 0.25;
}
37.5% {
    opacity: 0.375;
}
50% {
    opacity: 0.5;
}
62.5% {
    opacity: 0.625;
}
75% {
    opacity: 0.75;
}
87.5% {
    opacity: 0.875;
}
100% {
    opacity: 1;
}
`;
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

export const Button = styled(LinkS)`
border-radius: 50px;
background: linear-gradient(-90deg, #f4c4f3, #fc67fa);
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff' )};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px' )};
outline: none;
border: none;
background-size: 400% 400%;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
animation: ${animateButtonBackground} 4s ease-in-out infinite;

&: hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
}
`;