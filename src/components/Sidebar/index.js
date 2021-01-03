import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';


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
               Angebote              
             </SidebarLink> 
             <SidebarLink to="offers" onClick={toggle}>
               Spezial              
             </SidebarLink>         
            </SidebarMenu>
            <SideBtnWrap>
              <SidebarRoute to="/signin">Sign In</SidebarRoute>  
            </SideBtnWrap>
          </SidebarWrapper>    
        </SidebarContainer>
    )
}

export default Sidebar;
