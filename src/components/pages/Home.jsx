import React, {useState} from 'react'
import HeroSection from '../herosection/HeroSection'
import { HomeObjOne, HomeObjThree, HomeObjTwo } from '../infoSection/infoData'
import InfoSection from '../infoSection/InfoSection'
import Services from '../services/Services'
import FloatActionButton from '../styled_components/fab/FloatActionButton'

import GlassCard from '../styled_components/glassmorphism_cards/GlassCard'

import Footer from '../styled_components/footer/Footer'
import NavBar from '../styled_components/navbar/index'
import SideBar from '../styled_components/sidebar/Index'


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
            <InfoSection {...HomeObjTwo}/>
            <GlassCard/>
            <Services/>
            <InfoSection {...HomeObjThree}/>
            <Footer/>
            <FloatActionButton/>
        </>
    )
}

export default Home;
