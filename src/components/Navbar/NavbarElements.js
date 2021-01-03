import styled, {keyframes} from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';



export const NavAnimation = keyframes`
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



export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? 'transparent' : 'transparent')};
height: 80px;
display: flex;
background-size: 200% 200%;
margin-top: -80px;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
animation: ${NavAnimation} 5s infinite;


@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`;


export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 2rem;
font-family: 'Pacifico';
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;


export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
font-size: 1.2rem;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 5px solid #fff;
    border-top: 5px solid #fff;
}
`;


export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: linear-gradient(to right, #bc4e9c, #f80759);
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 1rem;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;


&.active {
    border: 3px solid pink;
}
&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;