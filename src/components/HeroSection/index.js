import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ScrollButtonElements';


const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer id="home" activeClass="active">
          <HeroBg>
           <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
          </HeroBg>
          <HeroContent>
           <HeroH1>Kosmetikstudio Kamin</HeroH1>
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
