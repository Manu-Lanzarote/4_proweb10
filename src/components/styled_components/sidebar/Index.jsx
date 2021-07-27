import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBarRoute } from './SideBarElements';

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
                    <SideBarLink to='products' onClick={toggle}>
                        PRODUCTS
                    </SideBarLink>
                    <SideBarRoute to='/contact' onClick={toggle}>
                        CONTACT
                    </SideBarRoute>
                </SideBarMenu>
            </SideBarWrapper>
        </SidebarContainer>
    )
}

export default SideBar;
