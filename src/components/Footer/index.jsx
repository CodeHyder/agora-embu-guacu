import './footer.css'
import logoFooter from 'assets/logoFooter.svg'
import facebookIcon from 'assets/facebookIcon.svg'
import instagramIcon from 'assets/instagramIcon.svg'
import linkedinIcon from 'assets/linkedinIcon.svg'
import youtubeIcon from 'assets/youtubeIcon.svg'

const Footer = () => {
    return (
        <footer className='footer '>

            <div className='footer__container flex'>
                <div className='container__image'>
                    <img src={logoFooter} alt="" />

                    <ul className='social flex'>
                        <li><a href="https://facebook.com" className='social__item'><img src={facebookIcon} alt="" /></a></li>
                        <li><a href="" className='social__item'><img src={instagramIcon} alt="" /></a></li>
                        <li><a href="" className='social__item'><img src={linkedinIcon} alt="" /></a></li>
                        <li><a href="" className='social__item'><img src={youtubeIcon} alt="" /></a></li>
                    </ul>
                </div>

                <div className='container__list'>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <a href="" className='footer__link'>Institucional</a>
                        </li>
                        <li className='footer__item'><a href="" className='footer__link'>Denúncias</a></li>
                        <li className='footer__item'><a href="" className='footer__link'>Termos de uso</a></li>
                        <li className='footer__item'><a href="" className='footer__link'>Suporte</a></li>
                        <li className='footer__item'><a href="" className='footer__link'>Política de privacidade</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;