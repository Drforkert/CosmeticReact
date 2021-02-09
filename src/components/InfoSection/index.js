import React, {useEffect} from 'react'
import { Button } from '../ButtonElements';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2,
     TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img, Price} from './InfoElements';
import Aos from 'aos';
import "aos/dist/aos.css";

const InfoSection = ({price, lightBg, id, imgStart, topLine, lightText, dataAos, dataAosTwo, dataAosImg, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, ButtonPath}) => {
  useEffect(() => {
    Aos.init({ duration: 1500,
               delay: 100,
               offset: 200});
  }, []);

    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
           <InfoWrapper>
            <InfoRow imgStart={imgStart}>
             <Column1>
               <TextWrapper>
                <TopLine data-aos={dataAos}>{topLine}</TopLine>
                <Heading lightText={lightText} data-aos={dataAos}>{headline}</Heading>
                <Subtitle darkText={darkText} data-aos={dataAosTwo}>{description}
                <Price>{price}</Price>
                </Subtitle>
                <BtnWrap>
                 <Button to={ButtonPath} exact
                 spy="true"
                 primary={primary ? 1 : 0}
                 dark={dark ? 1 : 0}
                 dark2={dark2 ? 1 : 0}
                 >{buttonLabel}</Button>   
                </BtnWrap>
               </TextWrapper> 
             </Column1> 
             <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} data-aos={dataAosImg}/>
              </ImgWrap>  
             </Column2>  
            </InfoRow>     
           </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection;
