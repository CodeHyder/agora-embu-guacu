import React from "react";
import "./denuncias.css";

function Denuncias() {
  return (
    <div>
      <h1>Categoria da Denúncia</h1>
      <p>Selecione o tipo da sua denúncia.</p>
      <section className="categorias">
        <div className="services__container">
          <img src="" alt="" className="services__icon" />
          <p className="services__text">Saúde</p>
        </div>
        <div className="services__container">
          {" "}
          <img
            src="/assets/icon_animals.png"
            alt=""
            className="services__icon"
          />
          <p className="services__text">Segurança</p>
        </div>
        <div className="services__container">
          {" "}
          <img src="" alt="" className="services__icon" />
          <p className="services__text">Moradia</p>
        </div>
        <div className="services__container">
          {" "}
          <img src="" alt="" className="services__icon" />
          <p className="services__text">Educação</p>
        </div>
        <div className="services__container">
          {" "}
          <img src="" alt="" className="services__icon" />
          <p className="services__text">Estabelecimento</p>
        </div>
        <div className="services__container">
          {" "}
          <img src="" alt="" className="services__icon" />
          <p className="services__text">Meio Ambiente</p>
        </div>
        <div className="services__container">
          {" "}
          <img src="" alt="" className="services__icon" />
          <p className="services__text">Mobilidade</p>
        </div>
        <div className="services__container">
          {" "}
          <img src="" alt="" className="services__icon" />
          <p className="services__text">Transparência</p>
        </div>
      </section>
      <div className="nav-denuncias">
        <button>voltar</button>
        <button>continuar</button>
      </div>
    </div>
  );
}

export default Denuncias;
