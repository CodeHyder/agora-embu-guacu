import React from "react";
import "./denuncias.css";
import animalIcon from 'assets/animaisIcon.svg'
 import saudeIcon from 'assets/saudeIcon.svg'
 import moradiaIcon from 'assets/moradiaIcon.svg'
 import meioAmbienteIcon from 'assets/meioAmbienteIcon.svg'
 import transparenciaIcon from 'assets/transparenciaIcon.svg'
 import transporteIcon from 'assets/transporteIcon.svg'
 import segurancaIcon from 'assets/segurancaIcon.svg'
 import educacaoIcon from 'assets/educacaoIcon.svg'
 import estabelecimentoIcon from 'assets/estabelecimentosIcon.svg'
 import servicoPublicoIcon from 'assets/servicoPublicoIcon.svg'

function Denuncias() {
  return (
    <section className="section categorias">
      
      <div className="title__container">
        <h1 className="categorias__title">Categoria da Denúncia</h1>
        <p className="categorias__subtitle">Selecione o tipo da sua denúncia.</p>
      </div>

      <div className="categorias__container">

        <div className="services__container">
          <img src={saudeIcon} alt="" className="services__icon" />
          <p className="services__text">Saúde</p>
        </div>

        <div className="services__container">
          {" "}
          <img
            src={segurancaIcon}
            alt=""
            className="services__icon"
          />
          <p className="services__text">Segurança</p>
        </div>
        <div className="services__container">
          {" "}
          <img src={moradiaIcon} alt="" className="services__icon" />
          <p className="services__text">Moradia</p>
        </div>
        <div className="services__container">
          {" "}
          <img src={educacaoIcon} alt="" className="services__icon" />
          <p className="services__text">Educação</p>
        </div>
        <div className="services__container">
          {" "}
          <img src={animalIcon} alt="" className="services__icon" />
          <p className="services__text">Animais</p>
        </div>
        <div className="services__container">
          {" "}
          <img src={estabelecimentoIcon} alt="" className="services__icon" />
          <p className="services__text">Estabelecimento</p>
        </div>
        <div className="services__container">
          {" "}
          <img src={meioAmbienteIcon} alt="" className="services__icon" />
          <p className="services__text">Meio Ambiente</p>
        </div>
        <div className="services__container">
          {" "}
          <img src={transporteIcon} alt="" className="services__icon" />
          <p className="services__text">Mobilidade</p>
        </div>
        <div className="services__container">
          {" "}
          <img src={transparenciaIcon} alt="" className="services__icon" />
          <p className="services__text">Transparência</p>
        </div>
        <div className="services__container">
          {" "}
          <img src={servicoPublicoIcon} alt="" className="services__icon" />
          <p className="services__text">Serviços Publicos</p>
        </div> 
      </div>
      
      <div className="button__container">
        <a href="/" className="button backButton">Voltar</a>
        <a href="" className="button">Continuar</a>
      </div>
    </section>

  );
}

export default Denuncias;
