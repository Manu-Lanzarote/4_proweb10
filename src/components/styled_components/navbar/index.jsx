import React from 'react'

//Importación de estilos desde el componenteNavBarElements
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavBarElements'

//Iconos
import {FaBars} from 'react-icons/fa'

const NavBar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to='/'> 
                        WEBPRO 10
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>
                                <span>ABOUT</span>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>
                                <span>DISCOVER</span>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>
                                <span>SERVICES</span>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>
                                <span>CONTACT</span>
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar
