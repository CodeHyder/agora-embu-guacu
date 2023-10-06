// Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "pages/Home/index.jsx";
import Denuncias from "pages/Denuncias/index.jsx";
import Login from "pages/Login/index.jsx";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Denuncias" element={<Denuncias />} />
        <Route path="/Login" element={<Login />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default Rotas;
