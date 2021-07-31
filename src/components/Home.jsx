import React, {useState} from 'react'
import HeroSection from './herosection/HeroSection'
import { HomeObjOne, HomeObjThree, HomeObjTwo, HomeObjFour } from './infoSection/infoData'

import InfoSection from './infoSection/InfoSection'
import InfoSection2 from './infoSection/InfoSection2'
import InfoSection3 from './infoSection/InfoSection3'
import FloatActionButton from './styled_components/fab/FloatActionButton'

import GlassCard from './styled_components/glassmorphism_cards/GlassCard'

import ContactGlassForm from './styled_components/contact_glass_form/ContactGlassForm'

import LineaPoliticas from './styled_components/politicas/LineaPoliticas'

import Footer from './styled_components/footer/Footer'
import NavBar from './styled_components/navbar/index'
import SideBar from './styled_components/sidebar/Index'


const Home = () => {
    //Abrir y cerrar el SideBar
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...HomeObjOne}/>
            <InfoSection2 {...HomeObjFour}/>
            <GlassCard/>
            <InfoSection3 {...HomeObjThree}/>
            <ContactGlassForm/>
            <Footer/>
            <LineaPoliticas/>
            <FloatActionButton/>
        </>
    )
}

export default Home;
