import React, {useState} from 'react';
import { HeroContainer, HeroBg, HeroContent, Img, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ScrollButtonElements';


const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer id="home" activeClass="active">
          <HeroBg>
           <Img src="https://images.pexels.com/photos/4620874/pexels-photo-4620874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="home" />
          </HeroBg>
          <HeroContent>
           <HeroH1>Sandra Kamin Kosmetik</HeroH1>
           <HeroP>Schau dich gern um !
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
