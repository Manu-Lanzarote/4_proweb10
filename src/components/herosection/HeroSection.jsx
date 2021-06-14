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
                <h1>WEBPRO 10<br/>Desarrollamos tu web a medida</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ab quibusdam cupiditate impedit, vero sequi.</p>
                <Button to='/contact' onMouseEnter={onHover} onMouseLeave={onHover}>
                    Cotizar proyecto {hover ? <ArrowRight/> : <ArrowRightShort/>}
                </Button >
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
