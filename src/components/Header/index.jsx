import "./header.css";
import logo from "assets/logo.svg";
import loginIcon from "assets/login-icon.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav flex">
        <div className="nav__container flex">
          <h1 className="header__title">
            <img src={logo} alt="" className="logoIcon" />
            <a href="/" className="nav__link">
              ÁGORA<span className="ligth-title">EMBU-GUAÇU</span>
            </a>
          </h1>
          <ul className="nav__list flex">
            <li className="nav__item">
              <a href="/Institucional" className="nav__link">
                Institucional
              </a>
            </li>
            <li className="nav__item">
              <a href="/Categorias" className="nav__link">
                Participação
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Mapa
              </a>
            </li>
          </ul>
        </div>

        <a href="/Login" className="nav__link">
          <img src={loginIcon} alt="" className="loginIcon" /> Entrar
        </a>
      </nav>
    </header>
  );
};

export default Header;
