// App.js
import React from "react";
import "./App.css";
import Rotas from "./Rotas";
import Header from "components/Header";
import Footer from "components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Rotas />
      <Footer/>
    </div>
  );
}

export default App;
