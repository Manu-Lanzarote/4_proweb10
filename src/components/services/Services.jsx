import React from 'react'

import Icon1 from '../../images/web9.svg'
import Icon2 from '../../images/web6.svg'
import Icon3 from '../../images/web5.svg'

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Tu negocio en Nº 1</ServicesH2>
                    <ServicesP>Reduce tus gastos e incrementa el retorno de tu inversión</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Abierto 24h.</ServicesH2>
                    <ServicesP>Reduce tus gastos e incrementa el retorno de tu inversión</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Soporte 24/7</ServicesH2>
                    <ServicesP>Tu web siempre actualizada y segura, sin contratar servicios adicionales.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
