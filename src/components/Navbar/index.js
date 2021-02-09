import React, {useState, useEffect} from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
      if(window.scrollY >= 5100) {
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
              Sandra Kamin               
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
                <NavLinks to="classic" smooth={true} duration={800} spy={true}
                exact='true' offset={-80} activeClass="active">Classic</NavLinks>              
              </NavItem>
              <NavItem>
                <NavLinks to="clean" smooth={true} duration={800} spy={true}
                exact='true' offset={-80} activeClass="active">Clean</NavLinks>              
              </NavItem>
              <NavItem>
                <NavLinks to="comfort" smooth={true} duration={800} spy={true}
                exact='true' offset={-80} activeClass="active">Comfort</NavLinks>              
              </NavItem>
              <NavItem>
                <NavLinks to="exklusiv" smooth={true} offset={-80} duration={800} spy={true}
                exact='true' activeClass="active">Exklusiv</NavLinks>              
              </NavItem>            
              <NavItem>
                <NavLinks to="diamant" smooth={true} offset={-80} duration={800} spy={true}
                exact='true' activeClass="active">Diamant</NavLinks>              
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
