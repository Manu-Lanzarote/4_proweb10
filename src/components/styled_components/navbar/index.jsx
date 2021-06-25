//useState para que al bajar por la página la barra de navegación cambie de color
import React, {useState, useEffect} from 'react'

//Importación de estilos desde el componenteNavBarElements
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinksS, NavLinksR} from './NavBarElements'

//Iconos
import {FaBars} from 'react-icons/fa'

//react-scroll para que al pulsar el logo la web suba al inicio
import { animateScroll as scroll } from 'react-scroll'

const NavBar = ({toggle}) => {
    //useState para el scroll
    const [scrollNav, setScrollNav] = useState(false);

    //Función para que cuando el usuario pase de un determinado punto de la web se active el color negro de la barra de navegación. Incluye el useEffect
    const changeNav = () => {
        if(window.scrollY >=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    //Función Scroll Logo al inicio/Top /////react-scroll////////
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <> 
            {/* scrollNav para que funcione el cambio de color en la barra de navegación */}
            {/* Por último hay que ir al css de la barra de navegacion y poner una condición para el color de la barra como background-color: ${({scrollNav}) => (scrollNav ? '#010606' : 'transparent')}; (Ver NavBar Elements) */}
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    {/* función toggleHome para react-scroll */}
                    <NavLogo to='/' onClick={toggleHome}>
                        ProWeb 10
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinksS to='about'
                            // Propiedades react-scroll
                            smooth={true} duration={500} spy={true} exact='true' offset={-60}
                            >
                                <span>ABOUT ME</span>
                            </NavLinksS>
                        </NavItem>
                        <NavItem>
                            <NavLinksS to='discover'
                            // Propiedades react-scroll
                            smooth={true} duration={500} spy={true} exact='true' offset={-60}
                            >
                                <span>DISCOVER</span>
                            </NavLinksS>
                        </NavItem>
                        <NavItem>
                            <NavLinksS to='services'
                            // Propiedades react-scroll
                            smooth={true} duration={500} spy={true} exact='true' offset={-60}
                            >
                                <span>SERVICES</span>
                            </NavLinksS>
                        </NavItem>
                        <NavItem>
                            <NavLinksS to='products'
                            // Propiedades react-scroll
                            smooth={true} duration={500} spy={true} exact='true' offset={-60}
                            >
                                <span>PRODUCTS</span>
                            </NavLinksS>
                        </NavItem>
                        <NavItem>
                            <NavLinksR to='/signin'
                            // Propiedades react-scroll
                            smooth={true} duration={500} spy={true} exact='true' offset={-60}
                            >
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
