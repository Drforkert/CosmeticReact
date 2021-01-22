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
height: 1300px;
position: absolute;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 1;
overflow: hidden;


@media screen and (max-width: 360px){
    height: 1200px;
}
@media screen and (min-width: 768px) {
    height: 100vh;
}
@media screen and (min-width: 1100px) {
    height:100vh;
}
`;

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px) {
    height: 100%;
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
export const ContactHeader = styled.h1`
align-items: center;
text-align: center;
font-size: 1rem;
font-weight: 400;
padding: 20px;
color: #fff;

@media screen and (max-width: 480px) {
    font-size: 0.8rem;
    justify-content: flex-start;
    align-items: center;
    display: flex;
}
`;
export const ContactInfo = styled.div`
z-index: 2;
display: flex;
flex-direction: column;
background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.1));
border-radius: 20px;
height: 650px;
padding: 2rem;
margin-right: 2rem;
width: 300px;
box-shadow: 7px 7px 60px #000;

@media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0; 
}
`;
export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;

@media screen and (max-width: 480px) {
    padding: 10px;
    flex-direction: column;
}
`;

export const PhoneLink = styled.a`
font-size: 2.5rem;
cursor: pointer;
color: white;
text-decoration: none;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;

&:hover{
    color: pink;
}

@media screen and (max-width: 480px) {
    font-size: 1.5rem;
    flex-direction: row;
}
`;
export const Form = styled.form`
background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.1));
width: 500px;
height: 650px;
z-index: 2;
display: grid;
border-radius: 20px;
padding: 5rem 2rem;
box-shadow: 7px 7px 60px #000;

@media screen and (max-width: 480px) {
    padding: 2rem 2rem;
    width: 100%;
    height: 600px;
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