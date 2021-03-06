import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink,  } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Terms of service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to='/signin'>Submit Video</FooterLink>
                                <FooterLink to='/signin'>Ambassadors</FooterLink>
                                <FooterLink to='/signin'>Agency</FooterLink>
                                <FooterLink to='/signin'>Influencer</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Legal</FooterLinkTitle>
                                <FooterLink to='/signin'>Cookies</FooterLink>
                                <FooterLink to='/signin'>Privacy</FooterLink>
                                <FooterLink to='/signin'>Politica</FooterLink>
                                <FooterLink to='/signin'>Seguridad</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/signin'>Instagram</FooterLink>
                                <FooterLink to='/signin'>Facebook</FooterLink>
                                <FooterLink to='/signin'>Youtube</FooterLink>
                                <FooterLink to='/signin'>Twitter</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' arial-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' arial-label='Youtube'>
                                <FaYoutube/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
