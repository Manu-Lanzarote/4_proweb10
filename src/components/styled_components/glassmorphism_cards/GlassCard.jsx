import React from 'react'
import './GlassCss.css'

import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

const GlassCard = () => {
    return (
        <main className='card_main' id='services'>
            <div className='glass_container'>
                <Card1 />
                <Card2 />
                <Card3 />
            </div>
        </main>
    )
}

export default GlassCard;
