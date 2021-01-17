import React, {useState} from 'react';
import { HeroContainer, HeroBg, HeroContent, Img, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ScrollButtonElements';
import ImgOne from '../../images/sizedbg.jpg';


const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer id="home" activeClass="active">
          <HeroBg>
           <Img src={ImgOne} alt="home" />
          </HeroBg>
          <HeroContent>
           <HeroH1>Kosmetikstudio Sandra Kamin</HeroH1>
           <HeroP>Schau dir meine Angebote zur Entspannung an !
           </HeroP>
           <HeroBtnWrapper>
            <Button to="about" smooth={true} duration={800} spy={true}
            exact='true' activeClass="active" onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true"
            dark="true"
            >
              Explore {hover ? <ArrowForward /> : <ArrowRight/>}           
            </Button>           
           </HeroBtnWrapper>  
          </HeroContent>  
        </HeroContainer>
    )
}

export default HeroSection;
