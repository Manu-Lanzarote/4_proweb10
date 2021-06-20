import React from 'react'

//Importación de estilos desde el componenteNavBarElements
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinksS, NavLinksR} from './NavBarElements'

//Iconos
import {FaBars} from 'react-icons/fa'

const NavBar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to='/'>
                        ProWeb 10
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinksS to='about'>
                                <span>ABOUT ME</span>
                            </NavLinksS>
                        </NavItem>
                        <NavItem>
                            <NavLinksS to='discover'>
                                <span>DISCOVER</span>
                            </NavLinksS>
                        </NavItem>
                        <NavItem>
                            <NavLinksS to='services'>
                                <span>SERVICES</span>
                            </NavLinksS>
                        </NavItem>
                        <NavItem>
                            <NavLinksS to='products'>
                                <span>PRODUCTS</span>
                            </NavLinksS>
                        </NavItem>
                        <NavItem>
                            <NavLinksR to='/signin'>
                                <span>SIGN IN</span>
                            </NavLinksR>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar
