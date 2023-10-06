import React, { useState } from "react";
import "./login.css";
import TelaUsuario from "pages/TelaUsuario";

function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleCpfChange = (e) => {
    const cpfValue = e.target.value.replace(/\D/g, "");
    setCpf(cpfValue);
  };

  const formatCpf = (cpfValue) => {
    if (cpfValue.length <= 3) {
      return cpfValue;
    } else if (cpfValue.length <= 6) {
      return `${cpfValue.slice(0, 3)}.${cpfValue.slice(3)}`;
    } else if (cpfValue.length <= 9) {
      return `${cpfValue.slice(0, 3)}.${cpfValue.slice(3, 6)}.${cpfValue.slice(
        6,
      )}`;
    } else {
      return `${cpfValue.slice(0, 3)}.${cpfValue.slice(3, 6)}.${cpfValue.slice(
        6,
        9,
      )}-${cpfValue.slice(9, 11)}`;
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidCpfFormat = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(formatCpf(cpf));

    if (!isValidCpfFormat) {
      alert("CPF no formato incorreto. Use XXX.XXX.XXX-XX.");
      return;
    }

    const testUserCpf = "111.222.333-44";
    const testPassword = "teste";

    if (formatCpf(cpf) === testUserCpf && password === testPassword) {
      setLoggedIn(true);
    } else {
      alert("CPF ou senha incorretos. Tente novamente.");
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <TelaUsuario />
        </div>
      ) : (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                value={formatCpf(cpf)}
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
        </div>
      )}
    </div>
  );
}

export default Login;
