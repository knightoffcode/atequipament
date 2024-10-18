import React from 'react'

/**
 *
 * @returns
 */

function AboutUs() {
    return (
        <section className='about-us'>
            <div className='about-us__wrapper'>
                <div className='about-us__text'>
                    <h2 className='about-us__title'>Sobre Nós</h2>
                    <p className='about-us__description'>
                        Somos uma empresa dedicada a oferecer as melhores soluções para nossos clientes.
                        Nossa missão é inovar e garantir a satisfação total dos nossos parceiros.
                        Com uma equipe qualificada e apaixonada pelo que faz, estamos prontos para enfrentar
                        os desafios do mercado e contribuir para o seu sucesso.
                    </p>
                </div>
                <div className='about-us__image'>
                    <img src='https://placehold.co/500' alt='Sobre Nós' className='about-us__img' />
                </div>
            </div>
        </section>
    )
}

export default AboutUs
