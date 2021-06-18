import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink } from './SideBarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='about' onClick={toggle}>
                        ABOUT ME
                    </SideBarLink>
                    <SideBarLink to='discover' onClick={toggle}>
                        DISCOVER
                    </SideBarLink>
                    <SideBarLink to='services' onClick={toggle}>
                        SERVICES
                    </SideBarLink>
                    <SideBarLink to='contact' onClick={toggle}>
                        CONTACTO
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SidebarContainer>
    )
}

export default SideBar;
