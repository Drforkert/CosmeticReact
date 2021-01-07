import styled, {keyframes} from 'styled-components';


export const InfoSectionAnim = keyframes`
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


export const InfoContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? 'linear-gradient(-90deg, #e0eafc, #cfdef3)' : 'linear-gradient(-90deg, #232526, #414345)')};
height: 1000px;
background-size: 200% 200%;
animation: ${InfoSectionAnim} 5s ease-in-out infinite;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`;

export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 100%;
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

export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) =>(imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`)};
}
@media screen and (min-width: 1300px) {
    width: 1300px;
}
`;

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`;

export const TopLine = styled.p`
color: #fff;
font-size: 1rem;
line-height: 1rem;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 1rem;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 45px;
font-size: 1.1rem;
line-height: 1.5rem;
color: ${({darkText}) => (darkText ? '#010606' : "#fff")};
`;

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`;

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`;

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;

@media screen and (max-width: 768px) {
    height: 300px;
}
`;

