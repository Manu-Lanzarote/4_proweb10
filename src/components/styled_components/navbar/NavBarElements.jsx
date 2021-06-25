import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.nav`
    //Color de la barra de navegación, transparente o negro al hacer scroll
    background-color: ${({scrollNav}) => (scrollNav ? '#010606' : 'transparent')};
    height: 60px;
    margin-top: -60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #f6c6fb;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: -7px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.9rem;
        color: #f6c6fb;
        cursor: pointer;

        &:hover{
            color: white;
        }
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;

    }
`

export const NavItem = styled.li`
    height: 50px;
    font-size: 1.1rem;
    font-weight: 500;
`

//Estilos de los enlaces Scroll
export const NavLinksS = styled(LinkS)`
    color: #f6c6fb;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    span{
        &:hover{
            color: white;
        }
    }

    &.active{
        border-bottom: 3px solid #f6c6fb;
    }
`

//Estilos de los enlaces Route - Los mismos que los scroll, pero es necesario especificar que es una Ruta para que funcione en Index.jsx
export const NavLinksR = styled(LinkR)`
    color: #f6c6fb;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    span{
        &:hover{
            color: white;
        }
    }

    &.active{
        border-bottom: 3px solid #f6c6fb;
    }
`




