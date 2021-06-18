import React, {useState} from 'react'
import HeroSection from './herosection/HeroSection'
import { HomeObjOne, HomeObjThree, HomeObjTwo } from './infoSection/infoData'
import InfoSection from './infoSection/InfoSection'
import NavBar from './styled_components/navbar/index'
import SideBar from './styled_components/sidebar/Index'

const Index = () => {
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
            <InfoSection {...HomeObjThree}/>
        </>
    )
}

export default Index;
