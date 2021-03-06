import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: #010606;
`

export const FooterWrap = styled.div`
    padding: 48px 24px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #f6c6fb;

    @media screen and (max-width: 420px) {
        margin: 0%;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 1rem;
    margin-bottom: 16px;
    color: #DA47E1;
`

export const FooterLink = styled(Link)`
    color: #f6c6fb;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: white;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 40px 0 0;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #f6c6fb;
    font-size: 1.8rem;

    &:hover{
        color: white;
    }
`