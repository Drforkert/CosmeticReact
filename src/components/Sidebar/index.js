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
             <SidebarLink to="classic" onClick={toggle}>
               Classic              
             </SidebarLink> 
             <SidebarLink to="clean" onClick={toggle}>
               Clean              
             </SidebarLink> 
             <SidebarLink to="comfort" onClick={toggle}>
               Comfort              
             </SidebarLink>
             <SidebarLink to="exklusiv" onClick={toggle}>
               Exklusiv              
             </SidebarLink>         
             <SidebarLink to="diamant" onClick={toggle}>
               Diamant              
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
