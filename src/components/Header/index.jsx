import './header.css'
import logo from 'assets/logo.svg'
import loginIcon from 'assets/login-icon.svg'

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav flex">

                <div className='nav__container flex'>
                    <img src={logo} alt="" />
                    <h1 className="header__title">ÁGORA<span className='ligth-title'> EMBU-GUAÇU</span></h1>
                    <ul className='nav__list flex'>

                        <li className='nav__item'>
                            <a href="#"className='nav__link'>Institucional</a>
                        </li>
                        <li className='nav__item'>
                            <a href="#"className='nav__link'>Denúncias</a>
                        </li>
                        <li className='nav__item'>
                            <a href="#" className='nav__link'>Mapa</a>
                        </li>
                            
                    </ul>
                </div>
                
                
                <a href='' className='nav__link'>
                <img src={loginIcon} alt="" className='loginIcon'/>    Entrar
                </a>

            </nav>
        </header>
    )
}

export default Header