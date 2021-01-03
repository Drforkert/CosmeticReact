import React, {useState, useEffect} from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
      if(window.scrollY >= 500) {
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    }
    useEffect(()=> {
      window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
      scroll.scrollToTop();
    };

    return (
        <>
         <Nav scrollNav={scrollNav}>
            <NavbarContainer>
             <NavLogo to='/' onClick={toggleHome}>
              Kamin               
             </NavLogo>
             <MobileIcon onClick={toggle}>
              <FaBars />            
             </MobileIcon>
             <NavMenu>
              <NavItem>
                <NavLinks to="about" smooth={true} duration={800} spy={true}
                exact='true' offset={-80} activeClass="active">Über uns</NavLinks>              
              </NavItem>
              <NavItem>
                <NavLinks to="discover" smooth={true} duration={800} spy={true}
                exact='true' offset={-80} activeClass="active">Entdecke..</NavLinks>              
              </NavItem>
              <NavItem>
                <NavLinks to="services" smooth={true} duration={800} spy={true}
                exact='true' offset={-80} activeClass="active">Spezial</NavLinks>              
              </NavItem>
              <NavItem>
                <NavLinks to="offers" smooth={true} duration={800} spy={true}
                exact='true' activeClass="active">Angebote</NavLinks>              
              </NavItem>            
             </NavMenu>
             <NavBtn>
              <NavBtnLink to='signin'>Kontaktiere uns!</NavBtnLink>           
             </NavBtn>           
            </NavbarContainer>
         </Nav>
        </>
    )
}

export default Navbar;
