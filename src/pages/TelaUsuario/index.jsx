import React from "react";
import "./telausuario.css";

import Participacao from "pages/Participacao";

function TelaUsuario() {
  return (
    <div>
      <div className="title__container">
        <h1 className="categorias__title">Bem Vinde, X!</h1>
        <p className="categorias__subtitle">Como você quer participar hoje?</p>
        <Participacao />
      </div>
    </div>
  );
}

export default TelaUsuario;
