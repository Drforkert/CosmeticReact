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
height: 1000px;
background: linear-gradient(-90deg, #232526, #414345);
background-size: 200% 200%;
display: flex;
position: relative;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 50px;
animation: ${ChangeBG} 8s ease-in-out infinite;


@media screen and (max-width: 768px) {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}

@media screen and (max-width: 480px) {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}
`;

export const ServicesWrapper = styled.div`
max-width: 1400px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 48px;
padding: 20px;
transition: all 0.2s ease-in-out;


@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}


@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;

export const BoxShadow = keyframes`
0% {
    box-shadow: 7px 7px 60px #fff;
}
50% {
    box-shadow: 3px 3px 30px #fff;
}
100% {
    box-shadow: 7px 7px 60px #fff;
}
`;

export const ServicesCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.2), rgba(255,255,255,0.8));
align-items: center;
border-radius: 10px;
max-height: 100%;
padding: 20px;
transition: all 0.2s ease-in-out;
box-shadow: 7px 7px 60px #fff;

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
object-fit: cover;
margin-bottom: 15px;
`;

export const ServicesH1 = styled.h1`
font-size: 2.2rem;
color: #fff;
margin-bottom: 10px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;
export const ServicesH3 = styled.h1`
font-size: 1.5rem;
font-weight: 500;
margin: 30px;
color: #fff;
padding: 5px;
`;
export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
color: #000;
`;

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`;

export const ServicesP2 = styled.p`
font-size: 1rem;
color: #fff;
font-weight: 400;
margin-left: 30px;
`;



/// NEW TRIAL STARTS HERE MIGHT DELETE OLD ONE SOON ///

export const ProductsContainer = styled.div`
width: 100%; 
min-height: 100vh;
padding: 5rem calc((100vw - 1300px) /2);
background: linear-gradient(-90deg, #232526, #414345);
color: #fff;
`;


export const ProductsHeading = styled.h1`
font-size: 2rem;
color: #fff;
text-align: center;
padding-bottom: 2rem;
`;

export const ProductWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
`;

export const ProductCard = styled.div`
margin: 0 2rem;
line-height: 2;
width: 300px;
`;

export const ProductImg = styled.img`
height: 300px;
min-width: 300px;
max-width: 100%;
object-fit: cover;
border: 3px solid white;
box-shadow: 8px 8px 40px #fff;
cursor: pointer;
transition: all 0.2s ease-in-out;


&:hover{
    transform: scale(1.08);
}
`;

export const ProductTitle = styled.h2`
font-weight: 400;
font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
text-align: center;
`;

export const ProductDesc = styled.p`
margin-bottom: 1rem;
font-size: 1rem;
text-align: center;
`;

export const ProductQuote = styled.p`
margin-bottom: 1rem;
font-size: 1rem;
color: grey;
text-align: right;
`;
