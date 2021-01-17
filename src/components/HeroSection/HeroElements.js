import styled, {keyframes} from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
background: #0c0c0c;
display:flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 1000px;
position: relative;
z-index: 1;


&:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.5) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
    z-index: 2;
}
@media screen and (max-width: 480px) {
    height: 900px;
};
@media screen and (min-width: 768px) {
    height: 1100px;
};
@media screen and (min-width: 1024px) {
    height: 1370px;
}
@media screen and (max-width: 320px) {
    height: 600px;
}
@media screen and (min-width: 1100px) {
    height: 1000px;
}
`;

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
background: #232a34;

@media screen and (max-width: 480px) {
    height: 100%;
}
@media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
}
`;


export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const moveToLeft = keyframes`
0% {
    transform: translateX(20px);
    opacity: 0;
}
100% {
    transform: translateX(0);
    opacity: 1;
}
`;
export const moveToRight = keyframes`
0% {
    transform: translateX(-20px);
    opacity: 0;
}
100% {
    transform: translateX(0);
    opacity: 1;
}
`;


export const HeroH1 = styled.h1`
color: #fff;
font-family: 'Pacifico';
font-size: 4rem;
text-align: center;
animation: ${moveToLeft} 2s;
overflow: hidden;
position: relative;

@media screen and (max-width: 768px) {
    font-size: 2.5rem;
}
@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;

export const HeroP = styled.p`
margin-top: 24px;
animation: ${moveToRight} 2s;
color: #fff;
font-size: 1.5rem;
text-align: center;
max-width: 600px;


@media screen and (max-width: 768px) {
    font-size: 1.5rem;
}
@media screen and (max-width: 480px) {
    font-size: 1.1rem;
}
`;
export const HeroBtnWrapper = styled.div`
margin-top: 2rem;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;



