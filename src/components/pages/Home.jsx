import React, {useState} from 'react'
import HeroSection from '../herosection/HeroSection'
import { HomeObjOne, HomeObjThree, HomeObjTwo } from '../infoSection/infoData'
import InfoSection from '../infoSection/InfoSection'
import Services from '../services/Services'
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
            <Services/>
            <InfoSection {...HomeObjThree}/>
            <Footer/>
        </>
    )
}

export default Home;
