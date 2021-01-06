import React from 'react';
import Icon1 from '../../images/massage.jpg';
import Icon2 from '../../images/shellac.jpg';
import Icon3 from '../../images/weddingink.jpg';
import {ServicesContainer, ServicesH1, ServicesH3, ServicesP2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="offers">
          <ServicesH1>Zusammenfassung</ServicesH1>
          <ServicesH3>Lorem ipsum dolor sit amet, consetetur </ServicesH3>
          <ServicesP2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</ServicesP2>
          <ServicesWrapper>
            <ServicesCard>
             <ServicesIcon src={Icon1} alt="house"/>
             <ServicesH2>Massage</ServicesH2>
             <ServicesP>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</ServicesP>           
            </ServicesCard>
            <ServicesCard>
             <ServicesIcon src={Icon2} alt="house"/>
             <ServicesH2>Shell Nagellack</ServicesH2>
             <ServicesP>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</ServicesP>           
            </ServicesCard>
            <ServicesCard>
             <ServicesIcon src={Icon3} alt="house"/>
             <ServicesH2>Hochzeits Make-up</ServicesH2>
             <ServicesP>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</ServicesP>           
            </ServicesCard>
          </ServicesWrapper>  
        </ServicesContainer>
    )
}

export default Services
