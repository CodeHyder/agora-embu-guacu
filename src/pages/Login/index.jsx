import React, { useState } from "react";
import "./login.css";

function Login() {
  const [formattedCpf, setFormattedCpf] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleCpfChange = (e) => {
    const cpfValue = e.target.value.replace(/\D/g, "");
    const formattedValue = formatCpf(cpfValue);
    setFormattedCpf(formattedValue);
  };

  const formatCpf = (cpfValue) => {
    const match = cpfValue.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/);
    if (match) {
      const formattedCpf = match
        .slice(1, 5)
        .filter((group) => group !== "")
        .join(".");
      return formattedCpf + (match[4] ? "-" + match[4] : "");
    }
    return cpfValue;
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valide o formato do CPF aqui
    const isValidCpfFormat = /^(\d{3}\.){2}\d{3}-\d{2}$/.test(formattedCpf);

    if (!isValidCpfFormat) {
      alert("CPF no formato incorreto. Use XXX.XXX.XXX-XX.");
      return;
    }

    // Adicionar lógica de autenticação aqui

    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Você está logado!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="container">
          <div>
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              value={formattedCpf}
              onChange={handleCpfChange}
              placeholder="XXX.XXX.XXX-XX"
              maxLength="14"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;
