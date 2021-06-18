import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, ArrowRightShort, ArrowRight } from './HeroElements'
import Video from '../../images/Tunnel_hero.mp4'

//Botones
import { Button } from '../styled_components/Button'

const HeroSection = () => {
const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <h1>ProWeb 10</h1>
                <h2>Desarrollo Full Stack a medida</h2>
                <p>Haz de tu sitio web profesional la mejor herramienta de<br/>promoción y venta<br/><br/><h2>Destaca entre tus competidores</h2></p>
                <Button to='/contact' onMouseEnter={onHover} onMouseLeave={onHover}>
                    Cotizar proyecto {hover ? <ArrowRight/> : <ArrowRightShort/>}
                </Button >
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
