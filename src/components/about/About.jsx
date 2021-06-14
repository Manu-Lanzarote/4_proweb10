import React from 'react'
//Estilos
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine } from './AboutElements'

import { Button } from '../styled_components/Button'


const About = () => {
    return (
        <InfoContainer id={id}>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>TopLine</TopLine>
                        <h2>Título</h2>
                        <h4>Subtítulo</h4>
                        <Button to='home'>
                            Botón
                        </Button >
                    </TextWrapper>
                    </Column1>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default About
