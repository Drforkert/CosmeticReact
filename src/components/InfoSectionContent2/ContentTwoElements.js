import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';



export const BgColorAnim = keyframes`
0% {
    background-position: 0 25%;
}
50% {
    background-position: 100% 50%;
}
100%{
    background-position: 0 25%;
}
`;

export const ContentContainer = styled.div`
color: #fff;
background: linear-gradient(-90deg, #bdc3c7, #2c3e50);
animation: ${BgColorAnim} 6s linear infinite;
background-size: 200% 200%;

@media screen and (max-width: 768px) {
    padding: 20px 0;
};

@media screen and (min-width: 1024px) {
    height: 100vh;
}
`;

export const Title = styled.h1`
font-size: 3rem;
color: #000;
z-index: 10;
text-align: center;
padding: 20px 0 20px 0;

@media screen and (max-width: 480px) {
    font-size: 2rem;
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
margin-left: 2rem;
text-decoration: none;
width: 100px;
z-index: 0;
color: #fff;
font-family: 'Pacifico';
font-weight: 700;
font-size: 2rem;
animation: ${LogoAnim} 4s linear infinite;

@media screen and (max-width: 480px) {
    margin-left: 1rem;
    margin-top: 0.5rem;
}
`;


export const ContentWrapper = styled.div`
display: grid;
z-index: 1;
height: 830px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;

@media screen and (min-width: 1300px) {
    max-width: 1200px;
}
`;

export const AlignInfo = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
width: 100%;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
};
`;

export const ColumnX = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;

export const ColumnY = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;

@media screen and (max-width: 768px) {
    padding: 0;
}
`;

export const ProductWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

@media screen and (max-width: 768px) {
    padding-bottom: 20px;
}
`;

export const UpLine = styled.p`
color: #fff;
font-size: 1.5rem;
line-height: 1.rem;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 1rem;
`;


export const HeadingSec = styled.h1`
margin-bottom: 24px;
font-size: 3rem;
line-height: 1.1;
font-weight: 600;
color: #000;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;

export const Description = styled.p`
max-width: 440px;
margin-bottom: 45px;
font-size: 1.1rem;
color: #000;
`;

export const BtnWrapper = styled.div`
display: flex;
justify-content: flex-start;
`;

export const PlayerWrap = styled.div`
max-width: 600px;
height: 100%;

@media screen and (max-width: 480px) {
    height: 420px;
}
@media screen and (max-width: 320px) {
    height: 300px;
}
@media screen and (min-width: 540px) {
    height: 400px;
}
@media screen and (min-width: 768px){
    height: 400px;
}
@media screen and (min-width: 1200px) {
    height: 600px;
    width: 600px;
}
`;