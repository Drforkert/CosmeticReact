import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import img2 from '../../images/beautyprod1.jpg'

const Sidebar = ( {toggle, isOpen} ) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle} >
            <CloseIcon/>
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
             <SidebarLink to="about" onClick={toggle}>
               Über Uns              
             </SidebarLink>
             <SidebarLink to="discover" onClick={toggle}>
               Entdecke..              
             </SidebarLink> 
             <SidebarLink to="services" onClick={toggle}>
               Spezial              
             </SidebarLink> 
             <SidebarLink to="massage" onClick={toggle}>
               Klick mich!              
             </SidebarLink>
             <SidebarLink to="offers" onClick={toggle}>
               Alle Services              
             </SidebarLink>         
            </SidebarMenu>
            <SideBtnWrap>
              <SidebarRoute to="/signin">Kontakt</SidebarRoute>  
            </SideBtnWrap>
          </SidebarWrapper>    
        </SidebarContainer>
    )
}

export default Sidebar;
