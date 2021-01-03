import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';


export const ChangeBG = keyframes`
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

export const Container = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(-45deg, #bc4e9c, #f80759, #bc4e7c, #f80964);
background-size: 400% 400%;
animation: ${ChangeBG} 10s ease-in-out infinite;
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

export const Icon = styled(Link)`
margin-left: 2rem;
margin-top: 2rem;
text-decoration: none;
width: 100px;
color: #fff;
font-family: 'Pacifico';
font-weight: 700;
font-size: 2rem;

@media screen and (max-width: 480px) {
    margin-left: 1rem;
    margin-top: 0.5rem;
}
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
background: linear-gradient(to right, #bc4e9c, #f80759);
max-width: 600px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 5rem 2rem;
box-shadow: 0 2px 4px rgba(0,0,0,0.9);

@media screen and (max-width: 400px) {
    padding: 2rem 2rem;
}
`;

export const FormH1 = styled.h1`
margin-bottom: 2.5rem;
color: #fff;
font-size: 2rem;
font-weight: 400;
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

export const FormButton =styled.button`
background: Turquoise;
padding: 1rem 0;
margin: 2rem;
border: none;
border-radius: 0.25rem;
color: #fff;
font-size: 1.25rem;
cursor: pointer;

&:hover{
    background: #000;
    transform scale(1.1);
    transition: all 0.2s ease-in-out;
}
`;

export const Text = styled.span`
text-align: center;
margin-top: 1.5rem;
color: #fff;
font-size: 1.1rem;
`; 


export const TextArea = styled.textarea`
resize: none;
width: 100%;
height: 130px;
border-radius: 3px; 
`;