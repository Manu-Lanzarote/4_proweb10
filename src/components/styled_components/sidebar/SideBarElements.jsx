import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'

import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: #111111;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #f6c6fb;

    &:hover{
            color: white;
        }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 1.9rem;
    cursor: pointer;
    outline: none;
`

export const SideBarWrapper = styled.div`
    color: #f6c6fb;
`

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and  (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 400;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    color: #f6c6fb;
    cursor: pointer;

    &:hover{
        color: white;
        transition: 0.3s ease-in-out;
    }
`

export const SideBarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #f6c6fb;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: 0.3s ease-in-out;
        background: white;
        color: #010606;
    }
`