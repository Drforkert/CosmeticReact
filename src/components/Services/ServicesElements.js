import styled, {keyframes} from 'styled-components';


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
export const ServicesContainer = styled.div`
height: 1200px;
background: linear-gradient(-45deg, #EE7752, #E73C7e, #23A6D5, #23D5ab);
background-size: 400% 400%;
display: flex;
position: relative;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 50px;
animation: ${ChangeBG} 10s ease-in-out infinite;


@media screen and (max-width: 768px) {
    height: 100%;
    padding-top: 50px;
}

@media screen and (max-width: 480px) {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}
`;

export const ServicesWrapper = styled.div`
max-width: 1200px;
margin: 0;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;
transition: all 0.2s ease-in-out;


@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}


@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;
export const ServicesCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 100%;
padding: 20px;
transition: all 0.2s ease-in-out;
box-shadow: inset 0 0 0 400px rgba(255,255,255,0.4);

&:hover {
    transform: scale(1.03);
    transform: translateY(-10px);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
}
`;


export const ServicesIcon = styled.img`
height: 220px;
width: 250px;
margin-bottom: 15px;
border: 2px solid #ffff;
box-shadow: 4px 4px 4px 0px #000;
`;

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`;

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`;

