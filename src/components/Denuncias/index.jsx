import React from "react";
import "./denuncias.css";

function Denuncias() {
  return (
    <div>
      <h1>Categoria da Denúncia</h1>
      <p>Selecione o tipo da sua denúncia.</p>
      oioi
      <section className="categorias">
        <div className="services__container">
          <img src="" alt="" />
          <p>Saúde</p>
        </div>
        <div className="services__container">
          {" "}
          <img src="/assets/icon_animals.png" alt="" />
          <p>Segurança</p>
        </div>
        <div className="services__container">
          {" "}
          <img src="" alt="" />
          <p>Moradia</p>
        </div>
        <div className="services__container">
          {" "}
          <img src="" alt="" />
          <p>Educação</p>
        </div>
        <div className="services__container">
          {" "}
          <img src="" alt="" />
          <p>Estabelecimento</p>
        </div>
        <div className="services__container">
          {" "}
          <img src="" alt="" />
          <p>Meio Ambiente</p>
        </div>
        <div className="services__container">
          {" "}
          <img src="" alt="" />
          <p>Mobilidade</p>
        </div>
        <div className="services__container">
          {" "}
          <img src="" alt="" />
          <p>Transparência</p>
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
