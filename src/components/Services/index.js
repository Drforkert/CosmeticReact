import React from 'react';
import Icon1 from '../../images/wimpernlifting.jpg';
import Icon2 from '../../images/shellac.jpg';
import Icon3 from '../../images/wedding2ink.jpg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="offers">
          <ServicesH1>Our Services</ServicesH1>
          <ServicesWrapper>
            <ServicesCard>
             <ServicesIcon src={Icon1}/>
             <ServicesH2>Wimpernlifting</ServicesH2>
             <ServicesP>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</ServicesP>           
            </ServicesCard>
            <ServicesCard>
             <ServicesIcon src={Icon2}/>
             <ServicesH2>Shell Nagellack</ServicesH2>
             <ServicesP>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</ServicesP>           
            </ServicesCard>
            <ServicesCard>
             <ServicesIcon src={Icon3}/>
             <ServicesH2>Hochzeits Make-up</ServicesH2>
             <ServicesP>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</ServicesP>           
            </ServicesCard>
          </ServicesWrapper>  
        </ServicesContainer>
    )
}

export default Services
