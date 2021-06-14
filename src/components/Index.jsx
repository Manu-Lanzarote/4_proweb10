import React, {useState} from 'react'
import About from './about/About'
import HeroSection from './herosection/HeroSection'
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
            <About/>
        </>
    )
}

export default Index;
