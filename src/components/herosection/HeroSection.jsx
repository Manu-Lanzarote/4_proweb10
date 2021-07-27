import { HeroContainer, HeroBg, VideoBg, HeroContent} from './HeroElements'
import Video from '../../images/Tunnel_hero.mp4'

//Boton
import GlassButtom from '../styled_components/glass_buttom/GlassButtom'

const HeroSection = () => {
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <h1>ProWeb 10</h1>
                <h2>Desarrollo Web Full Stack a medida</h2>
                <p>Haz de tu sitio web profesional la mejor herramienta de<br/>promoción y venta<br/><br/><h2>Destaca entre tus competidores</h2></p>
                <GlassButtom titulo='Portfolio'/>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
