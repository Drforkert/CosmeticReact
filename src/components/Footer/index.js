import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };


    return (
        <FooterContainer>
          <FooterWrap>
           <SocialMedia>
            <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>Kosmetik Sandra Kamin
            </SocialLogo>
            <WebsiteRights>Kamin © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
             <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />  
             </SocialIconLink>
             <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />  
             </SocialIconLink>
             <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />  
             </SocialIconLink>
            </SocialIcons>
            </SocialMediaWrap>
           </SocialMedia>
          </FooterWrap>  
        </FooterContainer>
    )
}

export default Footer
