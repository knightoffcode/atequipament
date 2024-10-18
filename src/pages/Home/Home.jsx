import React from 'react'
import Highlight from '../../components/Highlight/Highlight'
import AboutUs from '../../components/AboutUs/'
import Services from '../../components/Services/'
import Advantadges from '../../components/Advantadges/Advantadges'

/**
 *
 * @returns
 */

function Home() {
    return (
        <div className='home-page'>
            <Highlight />
            <AboutUs />
            <Advantadges />
            <Services />
        </div>
    )
}

export default Home
