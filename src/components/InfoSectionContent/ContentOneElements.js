import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import styled, { css, keyframes } from 'styled-components';
import {IoMdArrowRoundForward } from 'react-icons/io';
import {Link} from 'react-router-dom';

export const ContentSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;

@media screen and (max-width: 1024px) {
    max-height: 1400px;
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


export const Logo = styled(Link)`
margin-left: 2rem;
margin-top: 2rem;
text-decoration: none;
width: 100px;
position: absolute;
z-index: 10;
color: #fff;
font-family: 'Damion';
font-weight: 700;
font-size: 2rem;
animation: ${LogoAnim} 4s linear infinite;

@media screen and (max-width: 480px) {
    margin-left: 1rem;
    margin-top: 0.5rem;
}
`;
export const ContentWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: absolute;
opacity: 1;
`;

export const ImageSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
opacity: 1;
`;
export const ImageSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

&::before{
    content:'';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.6) 100%);
}
`;
export const ContentImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 120vh;
object-fit: cover;
opacity: 1;
`;
export const PageContent = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: 100%;
color: #fff;

h1{
    font-size: clamp((1rem, 8vw, 2rem) /2);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.8rem;

    @media screen and (max-width: 480px) {
        font-size: clamp(1rem, 6vw, 1.5rem);
        margin-left: 1rem;
    }
}
p{
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.8);
    font-size: clamp((1rem, 5vw, 1.5rem) /2);

    @media screen and (max-width: 480px) {
        font-size: clamp(1rem, 4vw, 1.2rem);
        margin-left: 1rem;
    }
}
`;
export const Arrow = styled(IoMdArrowRoundForward)`
font-size: 1.2rem;
margin: 0.5rem;
`;
export const SliderButtons = styled.div`
position: absolute;
bottom: 20%;
right: 45%;
display: flex;
z-index: 10;

@media screen and (max-width: 480px) {
    bottom: 10%;
    right: 17.5%
}
`;


export const arrowButtons = css`
width: 100px;
height: 50px;
color: #fff;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
    background: #686868;
    transform: scale(1.05);
}
`;


export const PrevArrow = styled(IoArrowBack)`
${arrowButtons};
`;


export const NextArrow = styled(IoArrowForward)`
${arrowButtons};
`;