// Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "pages/Home/index.jsx";

import Categorias from "pages/Categorias/index.jsx";
import Login from "pages/Login/index.jsx";
import TelaUsuario from "pages/TelaUsuario";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categorias" element={<Categorias />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/TelaUsuario" element={<TelaUsuario />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default Rotas;
