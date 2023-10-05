import icon1 from 'assets/services-icon.svg'
import icon2 from 'assets/services-icon2.svg'
import icon3 from 'assets/services-icon3.svg'

import './Services.css'

const Services = () => {
    return (
        <section className="services section">

            <a className="services__container ">
                <img src={icon3} alt="" className='services__icon'/>
                <p className='services__text'>Fórum Municipal</p>
            </a>

            <div className="services__container ">
                <img src={icon1} alt="" className='services__icon'/>
                <p className='services__text'>Fazer denúncia</p>

            </div>

            <div className="services__container ">
                <img src={icon2} alt="" className='services__icon'/>
                <p className='services__text'>Mapa de denúncias</p>
            </div>
        </section>
    )
}

export default Services;