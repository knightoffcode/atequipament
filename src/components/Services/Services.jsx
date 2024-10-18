import React from 'react'

/**
 *
 * @returns
 */

function Services() {
    return (
        <section className='services'>
            <h2 className='services__title'>Nossos Serviços</h2>
            <div className='services__wrapper'>
                <div className='service-card'>
                    <img src='url-da-imagem1.jpg' alt='Serviço 1' className='service-card__img' />
                    <h3 className='service-card__title'>Serviço 1</h3>
                    <p className='service-card__description'>
                        Descrição breve do Serviço 1. O que ele oferece e como pode ajudar nossos clientes.
                    </p>
                </div>
                <div className='service-card'>
                    <img src='url-da-imagem2.jpg' alt='Serviço 2' className='service-card__img' />
                    <h3 className='service-card__title'>Serviço 2</h3>
                    <p className='service-card__description'>
                        Descrição breve do Serviço 2. Os benefícios e as vantagens para os clientes.
                    </p>
                </div>
                <div className='service-card'>
                    <img src='url-da-imagem2.jpg' alt='Serviço 2' className='service-card__img' />
                    <h3 className='service-card__title'>Serviço 2</h3>
                    <p className='service-card__description'>
                        Descrição breve do Serviço 2. Os benefícios e as vantagens para os clientes.
                    </p>
                </div>
                <div className='service-card'>
                    <img src='url-da-imagem2.jpg' alt='Serviço 2' className='service-card__img' />
                    <h3 className='service-card__title'>Serviço 2</h3>
                    <p className='service-card__description'>
                        Descrição breve do Serviço 2. Os benefícios e as vantagens para os clientes.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services
