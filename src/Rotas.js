// Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "components/Home/index.jsx";
import Denuncias from "components/Denuncias/index.jsx";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Denuncias" element={<Denuncias />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default Rotas;
