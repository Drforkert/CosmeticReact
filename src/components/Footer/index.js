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
             <SocialIconLink href="https://facebook.com" target="_blank" aria-label="Facebook" rel="noreferrer">
              <FaFacebook />  
             </SocialIconLink>
             <SocialIconLink href="https://instagram.com" target="_blank" aria-label="Instagram" rel="noreferrer">
              <FaInstagram />  
             </SocialIconLink>
             <SocialIconLink href="https://twitter.com" target="_blank" aria-label="Twitter" rel="noreferrer">
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
