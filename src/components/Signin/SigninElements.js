import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';



export const Background = styled.div`
width: 100%;
height: 100%;
position: absolute;


&:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.5) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 1;
}
`;

export const Img = styled.img`
width: 100%;
height: 100vh;
object-fit: cover;
position: absolute;

@media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
}
`;
export const Container = styled.div`
height: 100%;
position: absolute;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 1;
overflow: hidden;


@media screen and (max-width: 480px) {
    height: 1100px;
}
`;

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px) {
    height: 80%;
}
`;
export const LogoAnim = keyframes`
0%{
    transform: scale(1.0);
}
50%{
    transform: scale(1.2);
}
100%{
    transform: scale(1.0);
}`;


export const Icon = styled(Link)`
margin-left: 4rem;
margin-top: 2rem;
text-decoration: none;
width: 100px;
z-index: 2;
color: #fff;
font-family: 'Damion';
font-weight: 700;
font-size: 2rem;
animation: ${LogoAnim} 4s linear infinite;

@media screen and (max-width: 480px) {
    margin-left: 1rem;
    margin-top: 1rem;
    padding-top: 2rem;
    padding-left: 1rem;
}
@media screen and (max-width: 360px) {
    margin:0;
    padding-top: 5rem;
}
`;


export const ContactInfo = styled.div`
z-index: 3;
display: flex; 
justify-content: center;
flex-direction: row;
background: rgba(255,255,255,0.4), rgba(255,255,255, 0.6), rgba(255,255,255, 0.5);
max-width: 1100px;
margin: 0 auto;
height: 650px;
`;

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px) {
    padding: 10px;
}
`;

export const Form = styled.form`
background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6), rgba(0,0,0,0.6));
max-width: 600px;
height: 650px;
width: 100%;
z-index: 2;
display: grid;
margin: 0 auto;
border-radius: 20px;
padding: 5rem 2rem;
box-shadow: 7px 7px 60px #000;

@media screen and (max-width: 400px) {
    padding: 2rem 2rem;
}
`;
export const Error = styled.p`
color: yellow;
display:flex;
z-index: 3;
font-size: 0.8rem;
text-align: left;
`;
export const FormH1 = styled.h1`
margin-bottom: 2.5rem;
color: #fff;
z-index: 2;
position: relative;
font-size: 2rem;
font-weight: 600;
text-align: center;
padding: 2.5rem;
@media screen and (max-width: 450px) {
    margin-bottom: 0.5rem;
}
`;

export const FormLabel = styled.label`
margin-bottom: 0.5rem;
font-size: 0.8rem;
color: #fff;
`;

export const FormInput = styled.input`
padding: 1rem 1rem;
margin-bottom: 2rem;
border: none;
border-radius: 4px;
`;

export const FormButton = styled.button`
background: black;
padding: 1rem 0;
margin: 1rem;
border: none;
border-radius: 0.25rem;
color: #fff;
font-size: 1.25rem;
cursor: pointer;

&:hover{
    background: transparent;
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    border: 2px solid #fff;
}
`;

export const ThankYou = styled.h2`
font-size: 2rem;
color: #fff;
z-index: 3;
text-align: center;
margin-top: 2rem;
`;
export const Text = styled.span`
text-align: center;
margin-top: 1.5rem;
color: #fff;
font-size: 1.1rem;
`; 


export const Message = styled.textarea`
width: 100%;
height: 50px;
margin: 10px 0px;
margin-bottom: 0px;
padding: 10px;
border-radius: 5px;
font-size: large;
border-style: hidden;
height: 150px;
resize: none;
&:focus {
outline-color: white;
}`;